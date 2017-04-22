using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using PFS.Server.Core.DbContexts;
using System.IO;

namespace PFS.Server.Extensions
{
    public static class StaticFoldersExtensions
    {
        public static IApplicationBuilder UseStaticFolders(this IApplicationBuilder app)
        {
            using (var dbCtx = new PfsServerDbContext())
            {
                var contentSources = dbCtx.ContentSources.ToList();

                foreach (var cs in contentSources)
                {
                    try
                    {
                        var folderTokenName = cs.Name;
                        var folderTokenValue = Path.Combine(cs.DriveName, cs.Path);

                        if (new DirectoryInfo(folderTokenValue).Exists == false) continue;

                        app.UseStaticFiles(new StaticFileOptions()
                        {
                            FileProvider = new PhysicalFileProvider(folderTokenValue),
                            RequestPath = new PathString(folderTokenName)
                        });
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
