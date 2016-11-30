using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.OData.Extensions;
using PFS.Server.Repository.NetCoreOData.Mock;
using PFS.Server.Repository.NetCoreOData.Db;
using PFS.Server.Repository.NetCoreOData.Repositories;
using PFS.Server.Repository.NetCoreOData.Model;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;

namespace PFS.Server.Repository.NetCoreOData
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

          
            services.AddOData<IPfsODataCollections>();
            services.AddDbContext<PfsServerDbContext>();
            services.AddLogging();
            services.AddScoped<IPfsRepository<Tag>, TagsRepository>();
            services.AddScoped<IPfsDbContext>(provider => provider.GetService<PfsServerDbContext>());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            loggerFactory.AddDebug();

            app.UseOData("odata");
            app.UseMvc();
        }
    }
}
