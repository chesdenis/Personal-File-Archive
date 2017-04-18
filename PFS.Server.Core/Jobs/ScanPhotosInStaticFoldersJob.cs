using System;
using System.Collections.Generic;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System.Linq;
using System.Runtime.Serialization;

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

    public class ScanContentSource : BaseJob
    {
        [DataContract]
        public class Args : BaseArgs
        {
            [DataMember]
            public string ContentSourcePath { get; }
            [DataMember]
            public string ContentSourceName { get; set; }
        }

        public override BaseArgs DeserializeArgs(string argsAsJson)
        {
            throw new NotImplementedException();
        }

        public override void Execute(Job jobInDb, PfsServerDbContext dbCtx)
        {
            throw new NotImplementedException();
        }
    }
}
