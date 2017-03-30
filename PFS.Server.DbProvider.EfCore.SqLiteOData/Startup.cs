using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Builder;
using Microsoft.AspNetCore.OData.Routing.Conventions;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using PFS.Server.DbProvider.EfCore.SqLiteOData.Db;
using System.Linq;
using System;

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
            IAssemblyProvider provider = app.ApplicationServices.GetRequiredService<IAssemblyProvider>();
            var odataBuilder = new ODataConventionModelBuilder(provider)
                .BuildTagsModel()
                .BuildFilesModel()
                .BuildFoldersModel();

            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            app.UseCors(_ =>
            {
                _.WithOrigins("http://localhost:5000").AllowAnyHeader().AllowAnyMethod(); // PFS.Server.MvcApp
                _.WithOrigins("http://localhost:5030").AllowAnyHeader().AllowAnyMethod(); // PFS.Server.Admin
                _.WithOrigins("http://localhost:5040").AllowAnyHeader().AllowAnyMethod(); // PFS.Server.JasmineTests
            });
             
            app.UseMvc();
            app.UseMvc(_ => _.MapODataRoute("odata", odataBuilder.GetEdmModel()));
        }

        
    }

    public static class ODataModelExtensions
    {
        public static ODataConventionModelBuilder BuildTagsModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Tag>("Tags");

            return builder;
        }

        public static ODataConventionModelBuilder BuildFilesModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<PfsFile>("Files");

            return builder;
        }

        public static ODataConventionModelBuilder BuildFoldersModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<PfsFolder>("Folders");
             
            return builder;
        }
    }
}
