using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.Abstractions
{
    public abstract class BaseCRUDController<RepType, EntType> : ODataController
        where RepType : PfsCRUDRepository<EntType>
        where EntType : IEntity
    {
        protected readonly RepType Rep;

        protected BaseCRUDController(RepType rep)
        {
            Rep = rep;
        }

        [EnableQuery]
        public virtual IQueryable<EntType> Get()
        {
            return Rep.Get().AsQueryable();
        }

        public virtual EntType Get([FromODataUri]int key)
        {
            return Rep.Get(key);
        }

        [HttpPost]
        public virtual HttpResponseMessage Post(EntType entity)
        {
            var createdEntity = Rep.Post(entity);

            var response = Request.CreateResponse(HttpStatusCode.OK, createdEntity);
            response.Headers.Location = Request.RequestUri;
            return response;
        }

        [HttpPut]
        public virtual HttpResponseMessage Put([FromODataUri]int key, [FromBody]EntType entity)
        {
            var updatedEntity = Rep.Put(key, entity);

            var response = Request.CreateResponse(HttpStatusCode.OK, updatedEntity);
            response.Headers.Location = Request.RequestUri;
            return response;
        }

        [HttpDelete]
        public virtual HttpResponseMessage Delete([FromODataUri]int key)
        {
            Rep.Delete(key);

            var response = Request.CreateResponse(HttpStatusCode.NoContent);
            response.Headers.Location = Request.RequestUri;
            return response;
        }
    }
}