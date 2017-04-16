using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PFS.Server.Core.Abstractions
{
    public abstract class PfsCRUDRepository<T> : IPfsRepository<T> where T : IEntity
    {
        protected readonly IPfsDbContext DbCtx;
        protected abstract IEnumerable<T> Entities { get; }

        protected PfsCRUDRepository(IPfsDbContext dbCtx)
        {
            DbCtx = dbCtx;
        }

        public IEnumerable<T> Get()
        {
            return Entities;
        }

        public T Get(int id)
        {
            return Entities.FirstOrDefault(f => f.Id == id);
        }

        public T Post(T entity)
        {
            var createdEntity = DbCtx.AddEntity(entity);
            DbCtx.SaveChanges();

            return (T)createdEntity;
        }

        public T Put(int id, T entity)
        {
            var updatedEntity = DbCtx.UpdateEntity(entity);
            DbCtx.SaveChanges();

            return (T)updatedEntity;
        }

        public void Delete(int id)
        {
            DbCtx.RemoveEntity(id);
            DbCtx.SaveChanges();
        }


    }
}
