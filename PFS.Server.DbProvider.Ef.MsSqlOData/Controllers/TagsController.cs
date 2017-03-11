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

        [HttpGet]
        public IQueryable<Tag> Get()
        {
            return Rep.Get().AsQueryable();
        }

        [HttpGet]
        public Tag Get([FromODataUri]int key)
        {
            return Rep.Get(key);
        }

        [HttpPost]
        public HttpResponseMessage Post(Tag entity)
        {
            var createdEntity = Rep.Post(entity);

            var response = Request.CreateResponse(HttpStatusCode.OK, createdEntity);
            response.Headers.Location = Request.RequestUri;
            return response;
        }

        [HttpPut]
        public HttpResponseMessage Put([FromODataUri]int key, [FromBody]Tag entity)
        {
            var updatedEntity = Rep.Put(key, entity);

            var response = Request.CreateResponse(HttpStatusCode.OK, updatedEntity);
            response.Headers.Location = Request.RequestUri;
            return response;
        }

        [HttpDelete]
        public HttpResponseMessage Delete([FromODataUri]int key)
        {
            Rep.Delete(key);

            var response = Request.CreateResponse(HttpStatusCode.NoContent);
            response.Headers.Location = Request.RequestUri;
            return response;
        } 
    }
}