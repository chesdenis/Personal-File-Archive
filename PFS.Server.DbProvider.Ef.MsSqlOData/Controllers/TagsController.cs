using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
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
    public class TagsController: ODataController
    {
        private readonly IPfsRepository<Tag> Rep;

        public TagsController(IPfsRepository<Tag> rep)
        {
            Rep = rep;
        }

        private List<Tag> _tags = new List<Tag>()
        {
            new Tag() { Id = 1, Name= "Test1" },
            new Tag() { Id = 2, Name= "Test2" },
            new Tag() { Id = 3, Name= "Test3" },
            new Tag() { Id = 4, Name= "Test4" },
            new Tag() { Id = 5, Name= "Test5" },

        };

        public IQueryable<Tag> Get()
        {
            return Rep.Get().AsQueryable();
        }

        public Tag Get(int id)
        {
            return Rep.Get(id);
        }

        public HttpResponseMessage Post(Tag entity)
        {
            Rep.Post(entity);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        public HttpResponseMessage Put(int id, [FromBody]Tag entity)
        {
            Rep.Put(id, entity);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        public HttpResponseMessage Delete(int id)
        {
            Rep.Delete(id);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}