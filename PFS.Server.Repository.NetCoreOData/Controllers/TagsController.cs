using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using PFS.Server.Repository.NetCoreOData.Db;
using PFS.Server.Repository.NetCoreOData.Model;
using PFS.Server.Repository.NetCoreOData.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Repository.NetCoreOData.Controllers
{
    [EnableQuery]
    [Route("odata/Tags")]
    public class TagsController: Controller
    {
        private readonly IPfsRepository<Tag> Rep;

        public TagsController(IPfsRepository<Tag> rep)
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
            var retVal =  Rep.Get(id);

            if (retVal == null)
            {
                return NotFound();
            }

            return new ObjectResult(retVal);
        }

        [HttpPost]
        public IActionResult Post(Tag entity)
        {
            Rep.Post(entity);

            return new NoContentResult();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Tag entity)
        {
            Rep.Put(id, entity);

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Rep.Delete(id);

            return new NoContentResult();
        }


    }
}
