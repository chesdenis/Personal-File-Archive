using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Extensions;
using System.Linq;
using System.IO;
using PFS.Server.Core.Abstractions;

namespace PFS.Server.Core.Jobs
{
    public abstract class ScanContentSourceJob:BaseJob
    {
        [DataContract]
        public class Args 
        {
            [DataMember]
            public string ContentSourceName { get; set; }
        }

        protected Job JobInDb { get; set; }
        protected Args JobArgs { get; set; }
        protected IPfsDbContext DbCtx { get; set; }
        protected ContentSource ContentSource { get; set; }
        
        public override void Execute(Job jobInDb, IPfsDbContext dbCtx)
        {
            JobInDb = jobInDb;
            DbCtx = dbCtx;
            JobArgs = JobInDb.Args.Deserialize<Args>();
            ContentSource = DbCtx.ContentSources.FirstOrDefault(f => f.Name == JobArgs.ContentSourceName);
            if (ContentSource == null) throw new ArgumentNullException($"Content source with name {JobArgs.ContentSourceName} not found.");

            JobInDb.Status = JobStatus.InProgress;
            JobInDb.Started = DateTime.Now;
            
            DbCtx.SaveChanges();

            Console.WriteLine($"Start executing job {JobInDb.Id} ({JobInDb.Name})");

            try
            {
                DoScan();

                Console.WriteLine($"Job {JobInDb.Id} ({JobInDb.Name}) finished.");

                JobInDb.Status = JobStatus.Done;
                JobInDb.Finished = DateTime.Now;
                DbCtx.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error occured in Job {JobInDb.Id} ({JobInDb.Name}).");

                JobInDb.Status = JobStatus.Error;
                JobInDb.Comments = ex.Message + ex.StackTrace;
                JobInDb.Finished = DateTime.Now;
                DbCtx.SaveChanges();
            }
        }

        protected string GetUri(string ioPath)
        {
            var csIOPath = Path.Combine(ContentSource.DriveName, ContentSource.Path);
            var ioRelativePath = ioPath.Replace(csIOPath, string.Empty);

            ioRelativePath = ioRelativePath.Replace("\\", "/");

            return ioRelativePath;
        }

        public abstract void DoScan();
    }
}
