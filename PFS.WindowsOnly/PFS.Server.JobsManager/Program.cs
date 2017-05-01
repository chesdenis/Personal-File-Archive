
using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Simple.OData.Client;

namespace PFS.Server.JobsManager
{
    class Program
    {
        static void Main(string[] args)
        {
            var taskToRun = Task.Run(async () =>
             {
                 var baseOdataUrl = "http://localhost:5000/odata";

                 var client = new ODataClient(new ODataClientSettings(baseOdataUrl)
                 {
                     OnTrace = (x, y) => Console.WriteLine(string.Format(x, y)),
                 });
                 var jobs = await client.FindEntriesAsync("Jobs?$filter=(Status eq PFS.Server.Core.Entities.JobStatus'NotStarted')");

                 foreach (var job in jobs)
                 {
                     if (job.ContainsKey("Id") && job["Id"] is int)
                     {
                         var jobId = (int)job["Id"];

                         var dictParam = new Dictionary<string, object>
                         {
                             ["Id"] = jobId
                         };

                         try
                         {
                             await client.For("Jobs").Action("Default.ExecuteJob").Set(dictParam).ExecuteAsync();
                         }
                         catch(Exception ex)
                         {
                             Console.WriteLine(ex.Message);
                         }
                         
                     }
                   
                 }
             });
            taskToRun.Wait();
           

//            var builder = new ContainerBuilder();

//#if MsSql
//            builder.RegisterType<MsSqlDbContext>().As<IPfsDbContext>().SingleInstance();;
//#endif
//#if SqLite
//            builder.RegisterType<SqLiteDbContext>().As<IPfsDbContext>().SingleInstance();
//#endif

//            builder.RegisterType<JobsCollection>().SingleInstance();

//            var container = builder.Build();

//            container.Resolve<JobsCollection>().Execute();
        }
    }
}
