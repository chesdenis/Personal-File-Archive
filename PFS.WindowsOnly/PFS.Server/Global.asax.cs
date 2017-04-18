using Autofac;
using Autofac.Integration.WebApi;
using PFS.Server.App_Start;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace PFS.Server
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;

            // Register DbContext
            builder.RegisterType<PfsServerDbContext>().As<IPfsDbContext>().SingleInstance();

            // Register repositories
            builder.RegisterType<TagsRepository>().SingleInstance();
            builder.RegisterType<ContentSourcersRepository>().SingleInstance();
            builder.RegisterType<JobsRepository>().SingleInstance();
            builder.RegisterType<IOEntitiesRepository>().SingleInstance();

            // Register your Web API controllers.
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            // Set the dependency resolver to be Autofac.
            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            TestCallToDb();
        }

        protected void TestCallToDb()
        {
            try
            {
                using (var dbCtx = new PfsServerDbContext())
                {
                    var allJobs = dbCtx.Jobs.Take(1).ToList();
                }
            }
            catch (Exception ex)
            {

            }
        }
    }
}
