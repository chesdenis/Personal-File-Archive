using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System.Collections.Generic;
using System.Linq;

namespace PFS.Server.Core.Repositories
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

        public Tag Post(Tag entity)
        {
            var createdEntity = DbCtx.AddEntity(entity);
            DbCtx.SaveChanges();

            return createdEntity;
        }

        public Tag Put(int id, Tag entity)
        {
            var updatedEntity = DbCtx.UpdateEntity(entity);
            DbCtx.SaveChanges();

            return updatedEntity;
        }

        public void Delete(int id)
        {
            var entity = DbCtx.Tags.First(t => t.Id == id);
            DbCtx.RemoveEntity(entity);
            DbCtx.SaveChanges();
        }
    }


}
