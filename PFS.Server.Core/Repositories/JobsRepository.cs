using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System.Collections.Generic;
using System.Linq;
using System;

namespace PFS.Server.Core.Repositories
{
    
    public class JobsRepository : PfsCRUDRepository<Job>
    {
        public JobsRepository(IPfsDbContext dbCtx) : base(dbCtx)
        {
        }
        protected override IEnumerable<Job> Entities => DbCtx.Jobs;
    }

}
