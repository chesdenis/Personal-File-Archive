using PFS.Server.Core.Abstractions;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PFS.Server.Core.Jobs
{
    public abstract class BaseJob
    {         
        public abstract void Execute(Job jobInDb, IPfsDbContext dbCtx);
    }
}
