using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PFS.Server.Extensions;
using PFS.Server.Core.Middlewares;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Repositories;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core;
using Newtonsoft.Json;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Builder;

namespace PFS.Server
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services
                .AddMvc().AddJsonOptions((options) =>
                {
                    options.SerializerSettings.ContractResolver = null;
                    options.SerializerSettings.Formatting = Formatting.Indented;
                });

            //services.AddOData(options =>
            //       options.RoutingConventions = new List<IODataRoutingConvention>());
            services.AddOData();

            services.AddSingleton<IODataPathHandler, ODataSlashHandler>();

            services.AddDbContext<SqLiteDbContext>();

            //services.AddLogging();

            services.AddScoped<TagsRepository>();
            services.AddScoped<VideosRepository>();
            services.AddScoped<ContentSourcersRepository>();
            services.AddScoped<JobsRepository>();
            services.AddScoped<IOEntitiesRepository>();
            
            services.AddScoped<IPfsDbContext>(provider => provider.GetService<SqLiteDbContext>());

        }
        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);
            loggerFactory.AddDebug();

            app.UseMiddleware<DisablePfsCaching>();
            
            IAssemblyProvider provider = app.ApplicationServices.GetRequiredService<IAssemblyProvider>();
            var odataBuilder = new ODataConventionModelBuilder(provider)
                .BuildTagsModel()
                .BuildVideosModel()
                .BuildContentSourcesPathsModel()
                .BuildJobsModel()
                .BuildIOEntitiesModel();

            var model = odataBuilder.GetEdmModel();

            app.UseMvc(routes =>
            {
                routes.MapODataRoute("odata", model);
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                   name: "default",
                   template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseStaticFiles();
            app.UsePfsStaticFolders();
        }


    }
}
