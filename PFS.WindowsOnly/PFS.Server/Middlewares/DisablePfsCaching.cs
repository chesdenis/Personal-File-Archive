using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;

namespace PFS.Server.Middlewares
{
    public class DisablePfsCaching : OwinMiddleware
    {
        public DisablePfsCaching(OwinMiddleware next)
            :base(next)
        {

        }

        public override async Task Invoke(IOwinContext context)
        {
            context.Response.Headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
            context.Response.Headers["Pragma"] = "no-cache";
            context.Response.Headers["Expires"] = "0";

            await Next.Invoke(context);
        }
    }
}