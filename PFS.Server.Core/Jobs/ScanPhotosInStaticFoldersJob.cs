using System;
using System.Collections.Generic;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System.Linq;

namespace PFS.Server.Core.Jobs
{
    public class ScanPhotosInContentSourcesJob : BaseJob
    {
        public override BaseArgs DeserializeArgs(string argsAsJson)
        {
            return null;
        }

        public override void Execute(Job jobInDb, PfsServerDbContext dbCtx)
        {
            var contentSources = dbCtx.ContentSources.ToList();
        }
    }
}
