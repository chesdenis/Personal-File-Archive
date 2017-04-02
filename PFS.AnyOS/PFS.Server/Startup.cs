using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PFS.Server.Extensions;
using PFS.Server.Core.Middlewares;
using Microsoft.AspNetCore.OData.Extensions;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Repositories;
using PFS.Server.Core.Abstractions;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Builder;
using PFS.Server.Core.Entities;
using PFS.Server.Core;

namespace PFS.Server
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddOData();

            services.AddDbContext<PfsServerDbContext>();
            services.AddLogging();
            services.AddScoped<TagsRepository>();
            services.AddScoped<FilesRepository>();
            services.AddScoped<FoldersRepository>();

            services.AddScoped<IPfsDbContext>(provider => provider.GetService<PfsServerDbContext>());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            app.UseMiddleware<DisablePfsCaching>();

            app.UseStaticFiles();
            app.UseStaticFolders();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            IAssemblyProvider provider = app.ApplicationServices.GetRequiredService<IAssemblyProvider>();
            var odataBuilder = new ODataConventionModelBuilder(provider)
                .BuildTagsModel()
                .BuildFilesModel()
                .BuildFoldersModel();

            app.UseMvc(_ => _.MapODataRoute("odata", odataBuilder.GetEdmModel()));
        }


    }
}
