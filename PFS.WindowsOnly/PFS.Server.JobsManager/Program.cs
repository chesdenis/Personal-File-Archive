
using Autofac;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Jobs; 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PFS.Server.JobsManager
{
    class Program
    {
        static void Main(string[] args)
        {
            var builder = new ContainerBuilder();

#if MsSql
            builder.RegisterType<MsSqlDbContext>().As<IPfsDbContext>().SingleInstance();;
#endif
#if SqLite
            builder.RegisterType<SqLiteDbContext>().As<IPfsDbContext>().SingleInstance();
#endif

            builder.RegisterType<JobsCollection>().SingleInstance();

            var container = builder.Build();

            container.Resolve<JobsCollection>().Execute();
        }
    }
}
