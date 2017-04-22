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
using Microsoft.AspNetCore.OData.Routing;

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

            services.AddSingleton<PfsServerDbContext>();

            services.AddSingleton<IODataPathHandler, ODataSlashHandler>();

            //services.AddDbContext<PfsServerDbContext>();
            //services.AddLogging();
            //services.AddScoped<TagsRepository>();
            //services.AddScoped<VideosRepository>();
            //services.AddScoped<ContentSourcersRepository>();
            //services.AddScoped<JobsRepository>();
            services.AddScoped<IOEntitiesRepository>();

            //services.AddScoped<IPfsDbContext>(provider => provider.GetService<PfsServerDbContext>());

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

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);
            loggerFactory.AddDebug();

            app.UseMiddleware<DisablePfsCaching>();
            
            IAssemblyProvider provider = app.ApplicationServices.GetRequiredService<IAssemblyProvider>();
            var odataBuilder = new ODataConventionModelBuilder(provider)
                //.BuildTagsModel()
                //.BuildVideosModel()
                //.BuildContentSourcesPathsModel()
                //.BuildJobsModel()
                .BuildIOEntitiesModel();


            app.UseMvc(routes =>
            {
                routes.MapODataRoute("odata", odataBuilder.GetEdmModel());
            });

            app.UseMvc(routes => {
                routes.MapRoute(
                   name: "default",
                   template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseStaticFiles();
            app.UseStaticFolders();
        }


    }
}
