using PFS.Server.EntityFramework.OData.Mock;
using PFS.Server.EntityFramework.OData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Repository
{
    public class PhotoRepository : IRepository<Photo>  
    {
        IMockContext _context = new MockContext();

        public List<Photo> GetAll()
        {
           return _context.Photos.ToList();
        }

        public Photo Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<Photo> Save(Photo entity)
        {
            throw new NotImplementedException();
        }

        public string Update(int id, Photo entity)
        {
            throw new NotImplementedException();
        }

        public string Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}