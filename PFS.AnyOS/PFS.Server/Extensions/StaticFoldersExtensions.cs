using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;

namespace PFS.Server.Extensions
{
    public static class StaticFoldersExtensions
    {
        public static IApplicationBuilder UseStaticFolders(this IApplicationBuilder app)
        {
            var staticFolderMappings = Program.Configuration.GetSection("StaticFoldersMappings");
            var staticFolderPaths = staticFolderMappings.GetChildren();


            foreach (var staticFolderCfg in staticFolderPaths)
            {
                app.UseStaticFiles(new StaticFileOptions()
                {
                    FileProvider = new PhysicalFileProvider(staticFolderCfg.Value),
                    RequestPath = new PathString(staticFolderCfg.Key)
                });
            }


            return app;
        }
    }
}
