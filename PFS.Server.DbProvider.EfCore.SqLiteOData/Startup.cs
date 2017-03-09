using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using Microsoft.AspNetCore.OData.Extensions;
using PFS.Server.DbProvider.EfCore.SqLiteOData.Db;
using Microsoft.AspNetCore.OData.Builder;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddCors();
            
            services.AddOData<IPfsODataCollections>(builder=>
            {
                BuildFiles(builder);
                BuildFolders(builder);            
            });

            services.AddDbContext<PfsServerDbContext>();
            services.AddLogging();
            services.AddScoped<TagsRepository>();
            services.AddScoped<FilesRepository>();
            services.AddScoped<FoldersRepository>();

            services.AddScoped<IPfsDbContext>(provider => provider.GetService<PfsServerDbContext>());
        }

        private void BuildFiles(ODataConventionModelBuilder builder)
        {
            builder.EntityType<File>()
               .Collection
               .Function("GetFiles")
               .Returns<IQueryable<File>>()
               .Parameter<string>("folderPath");
        }

        private void BuildFolders(ODataConventionModelBuilder builder)
        {
            builder.EntityType<Folder>()
                 .Collection
                 .Function("GetFolders")
                 .Returns<IQueryable<Folder>>()
                 .Parameter<string>("folderPath");
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost:5000").AllowAnyHeader().AllowAnyMethod(); // PFS.Server.MvcApp
                builder.WithOrigins("http://localhost:5030").AllowAnyHeader().AllowAnyMethod(); // PFS.Server.Admin
                builder.WithOrigins("http://localhost:5040").AllowAnyHeader().AllowAnyMethod(); // PFS.Server.JasmineTests
            });

            

            app.UseOData("odata");
            app.UseMvc();
        }
    }
}
