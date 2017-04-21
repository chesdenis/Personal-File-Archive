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

[assembly: OwinStartup(typeof(PFS.Server.Startup))]
namespace PFS.Server
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            //var configuration = 

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
