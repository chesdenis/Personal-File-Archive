using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Extensions;

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
        protected PfsServerDbContext DbCtx { get; set; }
        
        public override void Execute(Job jobInDb, PfsServerDbContext dbCtx)
        {
            JobInDb = jobInDb;
            DbCtx = dbCtx;
            JobArgs = JobInDb.Args.Deserialize<Args>();

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

        public abstract void DoScan();
    }
}
