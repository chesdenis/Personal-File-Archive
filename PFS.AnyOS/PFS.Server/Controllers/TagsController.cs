using Microsoft.AspNetCore.Mvc;
using PFS.Server.Abstractions;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
 

namespace PFS.Server.Controllers
{
    [Route("odata/Tags")]
    public class TagsController : BaseCRUDController<TagsRepository, Tag>
    {
        public TagsController(TagsRepository rep) : base(rep)
        {
        }
    }
}