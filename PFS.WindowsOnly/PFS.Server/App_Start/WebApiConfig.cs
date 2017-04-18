using PFS.Server.Core;
using PFS.Server.Core.Entities;
using PFS.Server.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using System.Web.OData.Routing.Conventions;

namespace PFS.Server
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Web API configuration and services
            var odataBuilder = new ODataConventionModelBuilder()
            .BuildTagsModel()
            .BuildContentSourcesPathsModel()
            .BuildJobsModel()
            .BuildIOEntitiesModel();

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
        }
    }
}
