
using PFS.Server.Core.DbContexts;
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

            JobTimer = new Timer(jobTimerFired,null,0, 
                (int)TimeSpan.FromSeconds(10).TotalMilliseconds);

            Console.ReadLine();
        }

        private static void jobTimerFired(object state)
        {
            //lock (thisLock)
            {
                Console.WriteLine("Start looking not started jobs...");
                try
                {
                    using (var dbCtx = new PfsServerDbContext())
                    {
                        var notStartedJobs = dbCtx.Jobs
                            .Where(w => w.Status == Core.Entities.JobStatus.NotStarted).ToList();

                        var jobTasks = new List<Task>();

                        foreach (var jobEntity in notStartedJobs)
                        {
                            var jobName = jobEntity.Name;
                            var jobArgs = jobEntity.Args;

                            //jobFullName = "PFS.Server.Core.Jobs.ReadItemsPropsInFolderJob, PFS.Server, Version=1.0.0.0";
                            var jobType = Type.GetType(jobName);
                            if (jobType == null) continue;

                            var jobToRun = Activator.CreateInstance(jobType) as BaseJob;
                            if (jobToRun == null) continue;

                            jobTasks.Add(new Task(() =>
                            {
                                jobToRun.Execute(
                                args: jobToRun.DeserializeArgs(jobArgs));
                            }));

                            var jobInDb = dbCtx.Jobs.FirstOrDefault(w => w.Id == jobEntity.Id);
                            jobInDb.Status = Core.Entities.JobStatus.InProgress;
                            jobInDb.Started = DateTime.Now;
                            dbCtx.SaveChanges();
                        }

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
         
    }
}
