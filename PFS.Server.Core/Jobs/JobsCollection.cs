using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PFS.Server.Core.Jobs
{
    public static class JobsCollection 
    {
        public static void Execute()
        {
            Console.WriteLine("Collecting jobs...");
            
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

            Console.WriteLine("Finishing...");
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
