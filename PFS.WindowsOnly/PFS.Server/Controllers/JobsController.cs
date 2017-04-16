using PFS.Server.Abstractions;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.Controllers
{

    public class JobsController : BaseCRUDController<JobsRepository, Job>
    {
        public JobsController(JobsRepository rep) : 
            base(rep)
        {
        }
    }
}