using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.JasmineTests.Extensions
{
    public static class StaticFoldersExtensions
    {
        public static IApplicationBuilder UseJasmine(this IApplicationBuilder app)
        {
            var pathToJasmine = Path.Combine(Directory.GetCurrentDirectory(), "Jasmine");

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(pathToJasmine),
                RequestPath = new PathString("/jasmine")
            });
             
            return app;
        }
    }
}
