using System.Collections.Generic;

namespace PFS.Server.Repository.NetCoreOData.Repositories
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