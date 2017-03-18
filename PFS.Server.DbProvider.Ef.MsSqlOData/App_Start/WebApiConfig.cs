using PFS.Server.Core.Shared.Entities;
using PFS.Server.DbProvider.Ef.MsSqlOData.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using System.Web.OData.Routing.Conventions;

namespace PFS.Server.DbProvider.Ef.MsSqlOData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Web API configuration and services
            var odataBuilder = new ODataConventionModelBuilder()
            .BuildTagsModel()
            .BuildFilesModel()
            .BuildFoldersModel();

            config.MapODataServiceRoute("ODataWebApi", "odata", odataBuilder.GetEdmModel(),
                pathHandler: new ODataSlashHandler(), routingConventions: ODataRoutingConventions.CreateDefault());

            //config.MapODataServiceRoute("ODataWebApi", "odata", odataBuilder.GetEdmModel());


            // enable all queries in odata by default
            // also you can enable for specific entitites only:
            // builder.EntitySet<DB.Project>("Projects"); //your line of code
            // builder.EntityType<DB.Project>().Filter("ProjectID");
            config
                .Count()
                .Filter()
                .OrderBy()
                .Expand()
                .Select()
                .MaxTop(null);

            var corsParamsMainApp = new EnableCorsAttribute("http://localhost:5000", "*", "*"); // PFS.Server.MvcApp
            var corsParamsAdminApp = new EnableCorsAttribute("http://localhost:5030", "*", "*"); // PFS.Server.Admin
            var corsParamsJasmineTestsApp = new EnableCorsAttribute("http://localhost:5040", "*", "*"); // PFS.Server.JasmineTests
            config.EnableCors(corsParamsMainApp);
            config.EnableCors(corsParamsAdminApp);
            config.EnableCors(corsParamsJasmineTestsApp);

        }

        public static ODataConventionModelBuilder BuildTagsModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Tag>("Tags");

            return builder;
        }

        public static ODataConventionModelBuilder BuildFilesModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<PfsFile>("Files").EntityType.HasKey(k=>k.Path);

            return builder;
        }

        public static ODataConventionModelBuilder BuildFoldersModel(this ODataConventionModelBuilder builder)
        {
            var entitySet = builder.EntitySet<PfsFolder>("Folders");

            var entityType = entitySet.EntityType;
            entityType.HasKey(k=>k.Path);
            entityType.Function("GetChildFolders").Returns<IQueryable<PfsFolder>>();
            entityType.Function("GetChildFiles").Returns<IQueryable<PfsFile>>();

            return builder;
        }


    }
}
