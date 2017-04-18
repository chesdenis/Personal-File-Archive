
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Jobs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PFS.Server.JobsManager
{
    class Program
    {
        static Timer JobTimer { get; set; }
        private static Object thisLock = new Object();

        static void Main(string[] args)
        {
            Console.WriteLine("PFS.Server.JobsManager started...");
            Console.WriteLine("Press any key to close.");

            JobTimer = new Timer(managerTimerFired,null,0, 
                (int)TimeSpan.FromSeconds(10).TotalMilliseconds);

            Console.ReadLine();
        }

        private static void managerTimerFired(object state)
        {
            //lock (thisLock)
            {
                Console.WriteLine("Start looking jobs to run...");
                try
                {
                    using (var dbCtx = new PfsServerDbContext())
                    {
                        var jobTasks = new List<Task>();

                        var notStartedJobs = dbCtx.Jobs
                            .Where(w => w.Status == JobStatus.NotStarted).ToList();

                        var errJobs = dbCtx.Jobs
                            .Where(w => w.Status == JobStatus.Error).ToList();

                        PopulateJobTasks(dbCtx, notStartedJobs, jobTasks);
                        PopulateJobTasks(dbCtx, errJobs, jobTasks);

                        if (jobTasks.Count > 0)
                        {
                            Parallel.ForEach(jobTasks, task => task.Start());
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
           
        }

        private static void PopulateJobTasks(PfsServerDbContext dbCtx, List<Job> notStartedJobs, List<Task> jobTasks)
        {
            foreach (var jobEntity in notStartedJobs)
            {
                var jobName = jobEntity.Name;
                var jobArgs = jobEntity.Args;

                var jobType = Type.GetType(jobName);
                if (jobType == null) continue;

                var jobToRun = Activator.CreateInstance(jobType) as BaseJob;
                if (jobToRun == null) continue;

                jobTasks.Add(new Task(() =>
                {
                    using (var dbJobCtx = new PfsServerDbContext())
                    {

                        var jobInDb = dbJobCtx.Jobs.FirstOrDefault(w => w.Id == jobEntity.Id);
                        if (jobInDb == null) return;

                        jobToRun.Execute(jobInDb, dbJobCtx);
                    }
                }));
            }
        }
    }
}
