using System;
using System.Collections.Generic;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System.Linq;
using System.Runtime.Serialization;
using System.IO;

namespace PFS.Server.Core.Jobs
{
    public class ScanPhotosInContentSourcesJob : BaseJob
    {
        public override BaseArgs DeserializeArgs(string argsAsJson)
        {
            return null;
        }

        public override void Execute(Job job, PfsServerDbContext dbCtx)
        {
            job.Status = JobStatus.InProgress;
            job.Started = DateTime.Now;
            dbCtx.SaveChanges();

            var contentSources = dbCtx.ContentSources.ToList();

            if (contentSources.Count == 0) Console.WriteLine("Content sources not found.");

            contentSources.ForEach((item) =>
            {
                Console.WriteLine($"Scanning folder {item.Path} for drive {item.DriveName}");
            });

            job.Status = JobStatus.Done;
            job.Finished = DateTime.Now;
            dbCtx.SaveChanges();
        }
    }

    //public class ScanContentSource : BaseJob
    //{
    //    [DataContract]
    //    public class Args : BaseArgs
    //    {
    //        [DataMember]
    //        public string ContentSourcePath { get; }
    //        [DataMember]
    //        public string ContentSourceName { get; set; }
    //    }

    //    public override BaseArgs DeserializeArgs(string argsAsJson)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public override void Execute(Job jobInDb, PfsServerDbContext dbCtx)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
