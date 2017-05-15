using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using System.IO;
using System.Configuration;
using PFS.Server.Extensions;
using PFS.Server.Core.Middlewares;
using Autofac;
using System.Web.Http; 
using PFS.Server.Core.Repositories;
using PFS.Server.Core.Abstractions;
using Autofac.Integration.WebApi;
using System.Reflection;
using PFS.Server.Core.DbContexts;

[assembly: OwinStartup(typeof(PFS.Server.Startup))]
namespace PFS.Server
{
    public class Startup
    {
        public static IContainer Container { get; set; }

        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            //var configuration = 

            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;

            // Register DbContext
#if MsSql
            builder.RegisterType<MsSqlDbContext>().As<IPfsDbContext>().InstancePerLifetimeScope();
#endif
#if SqLite
            builder.RegisterType<SqLiteDbContext>().As<IPfsDbContext>().InstancePerLifetimeScope();
#endif

            // Register repositories
            builder.RegisterType<TagsRepository>().InstancePerLifetimeScope();
            builder.RegisterType<VideosRepository>().InstancePerLifetimeScope();
            builder.RegisterType<ContentSourcersRepository>().InstancePerLifetimeScope();
            builder.RegisterType<JobsRepository>().InstancePerLifetimeScope();
            builder.RegisterType<IOEntitiesRepository>().InstancePerLifetimeScope();

            // Register your Web API controllers.
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            // Set the dependency resolver to be Autofac.
            Container = builder.Build();

            config.DependencyResolver = new AutofacWebApiDependencyResolver(Container);

            string root = AppDomain.CurrentDomain.BaseDirectory;
            var physicalFileSystem = new PhysicalFileSystem(Path.Combine(root, "wwwroot"));
            var options = new FileServerOptions
            {
                RequestPath = PathString.Empty,
                EnableDefaultFiles = true,
                FileSystem = physicalFileSystem
            };
            options.StaticFileOptions.FileSystem = physicalFileSystem;
            options.StaticFileOptions.ServeUnknownFileTypes = false;

            app.Use(typeof(DisablePfsCaching));

            app.UseFileServer(options);
            app.UsePfsStaticFolders();

          //  app.UseConfiguration
        }
    }
}
