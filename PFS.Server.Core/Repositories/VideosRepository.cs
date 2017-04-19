using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PFS.Server.Core.Repositories
{
    public class VideosRepository : PfsCRUDRepository<Video>
    {
        public VideosRepository(IPfsDbContext dbCtx) : base(dbCtx)
        {
        }

        protected override IEnumerable<Video> Entities => DbCtx.Videos;
    }
}
