using Autofac;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Newtonsoft.Json.Linq;
using Owin;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.DbContexts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace PFS.Server.Extensions
{
    public static class StaticFoldersExtensions
    {
        public static IAppBuilder UsePfsStaticFolders(this IAppBuilder app)
        {
            string root = AppDomain.CurrentDomain.BaseDirectory;
            
            using (var scope = Startup.Container.BeginLifetimeScope())
            {
                var dbCtx = scope.Resolve<IPfsDbContext>();

                var contentSources = dbCtx.ContentSources.ToList();

                foreach (var cs in contentSources)
                {
                    try
                    {
                        var folderTokenName = cs.Name;
                        var folderTokenValue = Path.Combine(cs.DriveName, cs.Path);

                        if (new DirectoryInfo(folderTokenValue).Exists == false) continue;

                        var physicalFileSystem = new PhysicalFileSystem(folderTokenValue);
                        var options = new FileServerOptions
                        {
                            RequestPath = new Microsoft.Owin.PathString(folderTokenName),
                            EnableDefaultFiles = true,
                            FileSystem = physicalFileSystem
                        };
                        options.StaticFileOptions.FileSystem = physicalFileSystem;
                        options.StaticFileOptions.ServeUnknownFileTypes = false;
                        app.UseFileServer(options);
                    }
                    catch (Exception ex)
                    {
                         //TODO: log here
                    }
                }
            }

            return app;
        }
    }
}