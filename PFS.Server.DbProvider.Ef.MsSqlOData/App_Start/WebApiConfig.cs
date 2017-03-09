using PFS.Server.Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace PFS.Server.DbProvider.Ef.MsSqlOData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Web API configuration and services
            var builder = new ODataConventionModelBuilder()
            .BuildTagsModel()
            .BuildFilesModel()
            .BuildFoldersModel();
            
            config.MapODataServiceRoute("ODataWebApi", "odata", builder.GetEdmModel());

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
            builder.EntitySet<File>("Files");

            builder.EntityType<File>()
                .Collection
                .Function("GetFiles")
                .Returns<IQueryable<File>>()
                .Parameter<string>("folderPath");

            return builder;
        }

        public static ODataConventionModelBuilder BuildFoldersModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Folder>("Folders");

            builder.EntityType<Folder>()
                .Collection
                .Function("GetFolders")
                .Returns<IQueryable<Folder>>()
                .Parameter<string>("folderPath");

            return builder;
        }


    }
}
