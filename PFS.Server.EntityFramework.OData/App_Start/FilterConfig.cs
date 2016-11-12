using System.Web;
using System.Web.Mvc;

namespace PFS.Server.EntityFramework.OData
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
