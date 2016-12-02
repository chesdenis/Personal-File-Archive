using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Repository
{
    interface IRepository<T>
        where T : class
    {
        List<T> GetAll();
        T Get(int id);

        bool Save(T entity);
        string Update(int id, T entity);
        string Delete(int id);
    }
}