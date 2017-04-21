using PFS.Server.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.Controllers
{
    public class VideosController : BaseCRUDController<VideosRepository, Video>
    {
        public VideosController(VideosRepository rep) : base(rep)
        {
        }
    }
}