using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PFS.Server.EntityFramework.OData.Models;
using PFS.Server.EntityFramework.OData.Mock;
using PFS.Server.EntityFramework.OData.Repository;
using System.Web.OData;
using System.Net.Http;
using System.Net;

namespace PFS.Server.EntityFramework.OData.Controllers
{
    public class PhotosController : ODataController
    {
        IRepository<Photo> _context;

        public PhotosController()
        {
            _context = new PhotoRepository();
        }

        // GET /service/Photos
        public IQueryable<Photo> Get()
        {
            return _context.GetAll().AsQueryable();
        }

        // GET /service/Photos(1)
        public Photo Get(int id)
        {
            return _context.Get(id);
        }

        // POST /odata/Photos 
        public HttpResponseMessage Post(Photo entity)
        {
            _context.Save(entity);
            return new HttpResponseMessage(HttpStatusCode.Created);
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