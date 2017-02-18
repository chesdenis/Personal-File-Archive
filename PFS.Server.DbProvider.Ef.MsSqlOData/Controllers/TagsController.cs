using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.DbProvider.Ef.MsSqlOData.Controllers
{
    [EnableQuery]
    public class TagsController : ODataController
    {
        private readonly TagsRepository Rep;

        public TagsController(TagsRepository rep)
        {
            Rep = rep;
        }

        [EnableQuery]
        public IQueryable<Tag> Get()
        {
            return Rep.Get().AsQueryable();
        }

        [EnableQuery]
        public Tag Get(int id)
        {
            return Rep.Get(id);
        }

        [HttpPost]
        public HttpResponseMessage Post(Tag entity)
        {
            Rep.Post(entity);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        [HttpPut]
        public HttpResponseMessage Put([FromODataUri]int key, [FromBody]Tag entity)
        {
            Rep.Put(key, entity);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        public HttpResponseMessage Delete([FromODataUri]int key)
        {
            Rep.Delete(key);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        [HttpPost]
        public HttpResponseMessage RegisterFirst5Tags()
        {
            Rep.RegisterFirst5Tags();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}