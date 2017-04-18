using PFS.Server.Core.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System.Threading;

namespace PFS.Server.Core.Jobs
{
    public class ReadItemsPropsInFolderJob:BaseJob
    {       
        [DataContract]
        public class Args:BaseArgs
        {
            [DataMember]
            public string folderUrl { get; set; }

            [DataMember]
            public string TestVar2 { get; set; }
        }
         
        public override BaseArgs DeserializeArgs(string argsAsJson)
        {
            return argsAsJson.Deserialize<Args>();
        }

        public override void Execute(Job job, PfsServerDbContext dbCtx)
        {
            job.Status = JobStatus.InProgress;
            job.Started = DateTime.Now;

            dbCtx.SaveChanges();

            Console.WriteLine($"Start executing ReadItemsPropsInFolderJob with {job.Id}");
            
            var jobArgs = job.Args.Deserialize<Args>();
            Console.WriteLine(jobArgs.TestVar2);

            Console.WriteLine($"Made some comments in {job.Id}.");
            job.Comments = "Some comments";
            dbCtx.SaveChanges();

            Thread.Sleep(30000);

            Console.WriteLine($"Job {job.Id} finished.");

            job.Status = JobStatus.Done;
            job.Finished = DateTime.Now;
            dbCtx.SaveChanges();
        }
    }
}
