using PFS.Server.EntityFramework.OData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.OData;

namespace PFS.Server.EntityFramework.OData.Controllers
{
    public class ProductsController : ODataController
    {
        private List<Product> products = new List<Product>()
        {
            new Product()
            {
                ID = 1,
                Name = "Bread",
            }
        };

        public List<Product> Get()
        {
            return products;
        }
    }
}