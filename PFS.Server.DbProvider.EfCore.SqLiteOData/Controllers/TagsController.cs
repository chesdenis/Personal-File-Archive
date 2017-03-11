using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Query;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Controllers
{
    [EnableQuery()]
    [Route("odata/Tags")]
    public class TagsController : Controller
    {
        private readonly TagsRepository Rep;

        public TagsController(TagsRepository rep)
        {
            Rep = rep;
        }

        public IQueryable<Tag> Get()
        {
            return Rep.Get().AsQueryable();
        }

        [HttpGet("{id}")]
        public Tag Get(int id)
        {
            return Rep.Get(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Tag entity)
        {
            var createdEntity = Rep.Post(entity);

            return new OkObjectResult(createdEntity);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Tag entity)
        {
            var updatedEntity = Rep.Put(id, entity);

            return new OkObjectResult(updatedEntity);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Rep.Delete(id);

            return new NoContentResult();
        }
    }
}
