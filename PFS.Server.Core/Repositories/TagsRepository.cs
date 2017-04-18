using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System.Collections.Generic;
using System.Linq;
using System;

namespace PFS.Server.Core.Repositories
{   
    public class TagsRepository : PfsCRUDRepository<Tag>
    {
        public TagsRepository(IPfsDbContext dbCtx) : base(dbCtx)
        {
        }

        protected override IEnumerable<Tag> Entities => DbCtx.Tags;
    }
}
