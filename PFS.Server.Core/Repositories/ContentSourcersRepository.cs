using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PFS.Server.Core.Repositories
{
    public class ContentSourcersRepository : PfsCRUDRepository<ContentSource>
    {
        public ContentSourcersRepository(IPfsDbContext dbCtx) : base(dbCtx)
        {
        }

        protected override IEnumerable<ContentSource> Entities => DbCtx.ContentSources;
    }

}
