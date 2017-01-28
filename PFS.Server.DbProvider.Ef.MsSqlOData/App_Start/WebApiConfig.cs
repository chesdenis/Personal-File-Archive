using PFS.Server.Core.Entities;
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
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<Tag>("Tags");

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
    }
}
