using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Shared.Abstractions
{
    public interface IPfsRepository<T>
    {
        void Delete(int id);
        IEnumerable<T> Get();
        T Get(int id);
        void Post(T entity);
        void Put(int id, T entity);
    }

}
