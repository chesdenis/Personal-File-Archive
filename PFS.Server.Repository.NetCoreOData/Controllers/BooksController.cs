using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using PFS.Server.Repository.NetCoreOData.Mock;
using PFS.Server.Repository.NetCoreOData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Repository.NetCoreOData.Controllers
{
    [EnableQuery]
    [Route("odata/Books")]
    public class BooksController : Controller
    {
        private readonly MockContext _mockContext;

        public BooksController(MockContext mockContext)
        {
            _mockContext = mockContext;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _mockContext.Books;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var findResult = _mockContext.Books.FirstOrDefault(f => f.Id == id);

            if (findResult == null)
            {
                return NotFound();
            }

            return new ObjectResult(findResult);
        }
    }
}
