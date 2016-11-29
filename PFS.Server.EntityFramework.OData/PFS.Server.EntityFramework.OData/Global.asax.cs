using System.Web.Http;
using System.Web.Routing;

namespace PFS.Server.EntityFramework.OData
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
