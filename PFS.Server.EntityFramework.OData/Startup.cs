using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(PFS.Server.EntityFramework.OData.Startup))]

namespace PFS.Server.EntityFramework.OData
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
