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
    [Route("odata/Files")]
    public class FilesController : Controller
    {
        private readonly FilesRepository Rep;

        public FilesController(FilesRepository rep)
        {
            Rep = rep;
        }

       
    }
}
