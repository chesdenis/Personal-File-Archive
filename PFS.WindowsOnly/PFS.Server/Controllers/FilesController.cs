using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.Controllers
{
    [EnableQuery]
    public class FilesController : ODataController
    {
        private readonly FilesRepository Rep;

        public FilesController(FilesRepository rep)
        {
            Rep = rep;
        }

        [HttpGet]
        public IQueryable<PfsFile> Get()
        {
            return Rep.Get().AsQueryable();
        }

        [HttpGet]
        public PfsFile Get([FromODataUri]string key)
        {
            return Rep.Get(key);
        }
         
    }
}