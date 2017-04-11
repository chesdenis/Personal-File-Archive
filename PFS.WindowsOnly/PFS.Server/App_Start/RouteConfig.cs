using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace PFS.Server.App_Start
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            object homeController = new { controller = "Home", action = "Index", id = UrlParameter.Optional };

            routes.MapRoute("Default", "{controller}/{action}/{id}", homeController);
            routes.MapRoute("video", "video", homeController);
            routes.MapRoute("audio", "audio", homeController);
        }
    }
}