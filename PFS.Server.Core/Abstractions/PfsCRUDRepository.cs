
#if AnyOS
using Microsoft.EntityFrameworkCore.ChangeTracking;
#endif
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
#if AnyOS
            EntityEntry createdEntity = (EntityEntry)DbCtx.AddEntity(entity);
            DbCtx.SaveChanges();

            return (T)createdEntity.Entity;
#endif
#if WinOnly
            var createdEntity = DbCtx.AddEntity(entity);
            DbCtx.SaveChanges();

            return (T)createdEntity;
#endif
        }

        public T Put(int id, T entity)
        {
            var updatedEntity = DbCtx.UpdateEntity(entity);
            DbCtx.SaveChanges();

            return (T)updatedEntity;
        }

        public void Delete(int id)
        {
            var existedEntity = Entities.First(f => f.Id == id);

            DbCtx.RemoveEntity(existedEntity);
            DbCtx.SaveChanges();
        }


    }
}
