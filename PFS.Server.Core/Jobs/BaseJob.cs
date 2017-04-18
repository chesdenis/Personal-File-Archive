using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PFS.Server.Core.Jobs
{
    [DataContract]
    public abstract class BaseArgs
    {

    }

    public abstract class BaseJob
    {         
        public abstract BaseArgs DeserializeArgs(string argsAsJson);

        //TODO: need discussions about using event in job.
        /*public delegate void JobActionHandler();

        public event JobActionHandler ReportProgress = delegate { };
        public event JobActionHandler OnStarted = delegate { };
        public event JobActionHandler OnFinished = delegate { };

        public void InvokeReportProgress()
        {
            ReportProgress();
        }

        public void InvokeOnStarted()
        {
            OnStarted();
        }

        public void InvokeOnFinished()
        {
            OnFinished();
        }*/

        public abstract void Execute(Job jobInDb, PfsServerDbContext dbCtx);
    }
}
