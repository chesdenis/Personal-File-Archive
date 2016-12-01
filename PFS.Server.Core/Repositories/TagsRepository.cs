using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace PFS.Server.Core.Repositories
{
    public class TagsRepository : IPfsRepository<Tag>
    {
        protected readonly IPfsDbContext DbCtx;
        protected readonly ILogger Logger;

        public TagsRepository(IPfsDbContext dbCtx, ILoggerFactory loggerFactory) 
        {
            DbCtx = dbCtx;
            Logger = loggerFactory.CreateLogger(typeof(TagsRepository));
        }

        public IEnumerable<Tag> Get()
        {
            return DbCtx.Tags;
        }

        public Tag Get(int id)
        {
            return DbCtx.Tags.FirstOrDefault(f => f.Id == id);
        }

        public void Post(Tag entity)
        {
            DbCtx.TagsProvider.Add(entity);
            DbCtx.SaveChanges();
        }

        public void Put(int id, Tag entity)
        {
            DbCtx.TagsProvider.Update(entity);
            DbCtx.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = DbCtx.TagsProvider.Rows.First(t => t.Id == id);
            DbCtx.TagsProvider.Remove(entity);
            DbCtx.SaveChanges();
        }
    }
}
