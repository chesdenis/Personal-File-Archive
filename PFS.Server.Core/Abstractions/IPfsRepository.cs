using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Abstractions
{
    public interface IPfsRepository<T>
    {
        void Delete(int id);
        IEnumerable<T> Get();
        T Get(int id);
        T Post(T entity);
        T Put(int id, T entity);
    }

}
