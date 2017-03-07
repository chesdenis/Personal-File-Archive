using PFS.Server.Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
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
            .UseTags()
            .UseFSObjects();
            
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

             
        }

        public static ODataConventionModelBuilder UseTags(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Tag>("Tags");

            return builder;
        }

        public static ODataConventionModelBuilder UseFSObjects(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<FSObject>("FSObjects");

            builder.EntityType<FSObject>()
                .Collection
                .Function("GetFolders")                
                .Returns<IQueryable<FSObject>>()
                .Parameter<string>("folderPath");

            builder.EntityType<FSObject>()
                .Collection
                .Function("GetFiles")
                .Returns<IQueryable<FSObject>>()
                .Parameter<string>("folderPath");

            return builder;
        }


    }
}
