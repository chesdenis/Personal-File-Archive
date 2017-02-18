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
            DbCtx.AddEntity(entity);
            DbCtx.SaveChanges();
        }

        public void Put(int id, Tag entity)
        {
            DbCtx.UpdateEntity(entity);
            DbCtx.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = DbCtx.Tags.First(t => t.Id == id);
            DbCtx.RemoveEntity(entity);
            DbCtx.SaveChanges();
        }

        public void RegisterFirst5Tags()
        {
            DbCtx.AddEntity(new Tag() { Id = 1, Name = "First" });
            DbCtx.AddEntity(new Tag() { Id = 2, Name = "Second" });
            DbCtx.AddEntity(new Tag() { Id = 3, Name = "Third" });
            DbCtx.AddEntity(new Tag() { Id = 4, Name = "Fourth" });
            DbCtx.AddEntity(new Tag() { Id = 5, Name = "Fives" });

            DbCtx.SaveChanges();
        }
    }


}
