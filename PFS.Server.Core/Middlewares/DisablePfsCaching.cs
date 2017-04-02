using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
#if AnyOS
using Microsoft.AspNetCore.Http;
#endif
#if WinOnly
using Microsoft.Owin;
#endif

namespace PFS.Server.Core.Middlewares
{
    public class DisablePfsCaching
#if WinOnly
        :OwinMiddleware
#endif
    {
#if AnyOS
        private readonly RequestDelegate Next;
        public DisablePfsCaching(RequestDelegate next)
        {
            Next = next;
        } 
#endif

#if WinOnly
        public DisablePfsCaching(OwinMiddleware next)
          : base(next)
        {

        } 
#endif

#if AnyOS
        public async Task Invoke(HttpContext context) 
        {
            ConfigureHeaderDict(context.Response.Headers);
            await Next.Invoke(context);
        }
#endif
#if WinOnly
        public override async Task Invoke(IOwinContext context)
        {
            ConfigureHeaderDict(context.Response.Headers);
            await Next.Invoke(context);
        }
#endif
        private void ConfigureHeaderDict(IHeaderDictionary headers)
        {
            headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
            headers["Pragma"] = "no-cache";
            headers["Expires"] = "0";
        }
    }
}
