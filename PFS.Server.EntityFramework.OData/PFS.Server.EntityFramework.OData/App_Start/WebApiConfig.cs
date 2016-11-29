using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using PFS.Server.EntityFramework.OData.Models;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace PFS.Server.EntityFramework.OData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var builder = new ODataConventionModelBuilder();

            builder.EntitySet<Product>("Products");
            builder.EntitySet<Photo>("Photo");

            config.MapODataServiceRoute("ODataRoute", "service", builder.GetEdmModel());
        }
    }
}
