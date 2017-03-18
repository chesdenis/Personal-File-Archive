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
    [Route("odata/Folders")]
    public class FoldersController : Controller
    {
        private readonly FoldersRepository Rep;

        public FoldersController(FoldersRepository rep)
        {
            Rep = rep;
        }

        //[HttpGet]
        //public IQueryable<Folder> GetFolders([FromQuery] string folderPath)
        //{
        //    return Rep.GetFolders(folderPath).AsQueryable();
        //}
         
    }
}
