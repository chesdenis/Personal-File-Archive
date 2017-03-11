using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.DbProvider.Ef.MsSqlOData.Controllers
{
    [EnableQuery]
    public class FoldersController : ODataController
    {
        private readonly FoldersRepository Rep;

        public FoldersController(FoldersRepository rep)
        {
            Rep = rep;
        }

        
        [HttpGet]
        public IQueryable<Folder> GetFolders([FromODataUri] string folderPath)
        {
            return Rep.GetFolders(folderPath).AsQueryable();
        }
      
    }
}