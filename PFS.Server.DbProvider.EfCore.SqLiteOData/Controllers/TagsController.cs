using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Controllers
{
    [EnableQuery]
    [Route("odata/Tags")]
    public class TagsController : Controller
    {
        private readonly TagsRepository Rep;

        public TagsController(TagsRepository rep)
        {
            Rep = rep;
        }

        [HttpGet]
        public IEnumerable<Tag> Get()
        {
            return Rep.Get();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var entity = Rep.Get(id);

            if (entity != null)
            {
                return new OkObjectResult(entity);
            }

            return new NoContentResult();
        }

        [HttpPost]
        public IActionResult Post(Tag entity)
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
        
        [HttpPost]
        public IActionResult RegisterFirst5Tags()
        {
            Rep.RegisterFirst5Tags();

            return new NoContentResult();
        }
    }
}
