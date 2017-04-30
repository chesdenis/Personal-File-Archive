
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
                 var client = new ODataClient("http://localhost:5000/odata");
                 var jobs = await client.FindEntriesAsync("Jobs?$filter=Status eq 'NotStarted'");

                 foreach (var job in jobs)
                 {
                     Console.WriteLine(job["Id"]);
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
