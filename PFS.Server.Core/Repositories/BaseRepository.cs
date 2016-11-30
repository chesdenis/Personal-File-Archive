using Microsoft.Extensions.Logging;
using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Repositories
{
    public abstract class BaseRepository<T> : IPfsRepository<T> where T : IEntity
    {
        protected readonly IPfsDbContext DbCtx;
        protected readonly ILogger Logger;

        public BaseRepository(IPfsDbContext dbCtx, ILoggerFactory loggerFactory)
        {
            DbCtx = dbCtx;
            Logger = loggerFactory.CreateLogger(typeof(T));
        }

        protected abstract IPfsODataTable<T> Table { get; }


        public IEnumerable<T> Get()
        {
            return Table.Rows;
        }

        public T Get(int id)
        {
            return Table.Rows.FirstOrDefault(f => f.Id == id);
        }

        public void Post(T entity)
        {
            Table.Add(entity);
            DbCtx.SaveChanges();
        }

        public void Put(int id, T entity)
        {
            Table.Update(entity);
            DbCtx.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = Table.Rows.First(t => t.Id == id);
            Table.Remove(entity);
            DbCtx.SaveChanges();
        }

    }
}
