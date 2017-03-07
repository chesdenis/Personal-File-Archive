using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Controllers
{
    [EnableQuery]
    [Route("odata/Tags")]
    public class FSObjectsController : Controller
    {
        private readonly FSObjectsRepository Rep;

        [HttpGet]
        public IQueryable<FSObject> GetFolders([FromQuery] string folderPath)
        {
            return Rep.GetFolders(folderPath).AsQueryable();
        }

        [HttpGet]
        public IQueryable<FSObject> GetFiles([FromQuery] string folderPath)
        {
            return Rep.GetFiles(folderPath).AsQueryable();
        }
    }
}
