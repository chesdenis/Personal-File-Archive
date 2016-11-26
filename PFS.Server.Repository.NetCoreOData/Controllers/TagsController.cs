using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using PFS.Server.Repository.NetCoreOData.Db;
using PFS.Server.Repository.NetCoreOData.Model;
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
        private readonly PfsServerDbContext _dbContext;

        public TagsController(PfsServerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Tag> Get()
        {
            return _dbContext.Tags;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var findResult = _dbContext.Tags.FirstOrDefault(f => f.Id == id);

            if (findResult == null)
            {
                return NotFound();
            }

            return new ObjectResult(findResult);
        }
    }
}
