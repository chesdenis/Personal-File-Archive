using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System.Collections.Generic;
using System.Linq;
using System;
using PFS.Server.Core.Jobs;
using System.Threading.Tasks;

namespace PFS.Server.Core.Repositories
{
    
    public class JobsRepository : PfsCRUDRepository<Job>
    {
        public JobsRepository(IPfsDbContext dbCtx) : base(dbCtx)
        {
        }
        protected override IEnumerable<Job> Entities => DbCtx.Jobs;

        public async void ExecuteJob(int jobId)
        {
            var job = DbCtx.Jobs.FirstOrDefault(w => w.Id == jobId);
            if (job == null) return;

            var jobName = job.Name;
            var jobArgs = job.Args;

            var jobType = Type.GetType(jobName);
            if (jobType == null) return;

            var jobToRun = Activator.CreateInstance(jobType) as BaseJob;
            if (jobToRun == null) return;

            await Task.Run(() => 
            {
                var jobEntity = DbCtx.Jobs.FirstOrDefault(w => w.Id == jobId);
                if (jobEntity == null) return;

                jobToRun.Execute(jobEntity, DbCtx);
            });
        }
    }

}
