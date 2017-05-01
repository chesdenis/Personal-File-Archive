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
using PFS.Server.Core.Extensions;

namespace PFS.Server.Controllers
{
    public class JobsController : BaseCRUDController<JobsRepository, Job>
    {
        public JobsController(JobsRepository rep) : 
            base(rep)
        {
        }

        // POST odata/Jobs/Default.ExecuteJob
        [HttpPost]
        public void ExecuteJob(HttpRequestMessage request)
        {
            var rv = request.Content.ReadAsStringAsync().Result;
            var ro = rv.Deserialize<Job>();

            Rep.ExecuteJob(ro.Id);
        }
    }
}