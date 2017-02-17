using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System.Collections.Generic;
using System.Linq;

namespace PFS.Server.Core.Shared.Repositories
{
    public class TagsRepository : IPfsRepository<Tag>
    {
        protected readonly IPfsDbContext DbCtx;

        public TagsRepository(IPfsDbContext dbCtx) 
        {
            DbCtx = dbCtx;
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
