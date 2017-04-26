using Autofac;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PFS.Server.Core.Jobs
{
    //public class JobsCollection 
    //{
    //    ILifetimeScope Scope { get; set; }

    //    public JobsCollection(ILifetimeScope scope)
    //    {
    //        Scope = scope;
    //    }

    //    public void Execute()
    //    {
    //        Console.WriteLine("Collecting jobs...");

    //        try
    //        {
    //            using (var scope = Scope.BeginLifetimeScope())
    //            {
    //                var dbCtx = scope.Resolve<IPfsDbContext>();

    //                var jobTasks = new List<Task>();

    //                var notStartedJobs = dbCtx.Jobs
    //                    .Where(w => w.Status == JobStatus.NotStarted).ToList();

    //                var errJobs = dbCtx.Jobs
    //                    .Where(w => w.Status == JobStatus.Error).ToList();

    //                PopulateJobTasks(notStartedJobs, jobTasks);
    //                PopulateJobTasks(errJobs, jobTasks);

    //                if (jobTasks.Count > 0)
    //                {
    //                    Parallel.ForEach(jobTasks, task => task.Start());

    //                    Task.WaitAll(jobTasks.ToArray());
    //                }
    //            }

    //        }
    //        catch (Exception ex)
    //        {
    //            Console.WriteLine(ex);
    //        }

    //        Console.WriteLine("Finishing...");
    //    }

    //    private void PopulateJobTasks(List<Job> notStartedJobs, List<Task> jobTasks)
    //    {
    //        foreach (var jobEntity in notStartedJobs)
    //        {
    //            var jobName = jobEntity.Name;
    //            var jobArgs = jobEntity.Args;

    //            var jobType = Type.GetType(jobName);
    //            if (jobType == null) continue;

    //            var jobToRun = Activator.CreateInstance(jobType) as BaseJob;
    //            if (jobToRun == null) continue;

    //            jobTasks.Add(new Task(() =>
    //            {
    //                using (var scope = Scope.BeginLifetimeScope())
    //                {
    //                    var dbCtx = scope.Resolve<IPfsDbContext>();

    //                    var jobInDb = dbCtx.Jobs.FirstOrDefault(w => w.Id == jobEntity.Id);
    //                    if (jobInDb == null) return;

    //                    jobToRun.Execute(jobInDb, dbCtx);
    //                }
                  
    //            }));
    //        }
    //    }
    //}
}
