using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PFS.Server.EntityFramework.OData.Models;
using PFS.Server.EntityFramework.OData.Mock;
using System.Web.OData;
using PFS.Server.EntityFramework.OData.Repository;

namespace PFS.Server.EntityFramework.OData.Controllers
{
    public class PhotoController : ODataController
    {
        IRepository<Photo> _context;

        public PhotoController()
        {
            _context = new PhotoRepository();
        }

        public List<Photo> Get()
        {
            return _context.GetAll();
        }

        public Photo Get(int id)
        {
            
            throw new NotImplementedException();
        }

        public List<Photo> Post(Photo entity)
        {
            throw new NotImplementedException();
        }

        public string Put(int id, Photo entity)
        {
            throw new NotImplementedException();
        }

        public string Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}