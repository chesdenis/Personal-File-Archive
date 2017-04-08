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
using System.Web.OData.Query;
using System.Web.OData.Routing;

namespace PFS.Server.Admin.Controllers
{
    //[EnableQuery]
    //public class FoldersController : ODataController
    //{
    //    private readonly FoldersRepository Rep;

    //    public FoldersController(FoldersRepository rep)
    //    {
    //        Rep = rep;
    //    }

    //    [HttpGet]
    //    public IQueryable<PfsFolder> Get()
    //    {
    //        return Rep.Get().AsQueryable();
    //    }

    //    [HttpGet]
    //    public PfsFolder Get([FromODataUri]string key)
    //    {
    //        return Rep.Get(key);
    //    }

    //    [HttpGet]
    //    public IQueryable<PfsFolder> GetChildFolders([FromODataUri]string key)
    //    {
    //        return Rep.GetChildFolders(key).AsQueryable();
    //    }
    //}
}