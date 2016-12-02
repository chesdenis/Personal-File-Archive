using Microsoft.Extensions.Logging;
using PFS.Server.Repository.NetCoreOData.Db;
using PFS.Server.Repository.NetCoreOData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Repository.NetCoreOData.Repositories
{
    public class TagsRepository : IPfsRepository<Tag>
    {

        protected readonly PfsServerDbContext dbCtx;
        protected readonly ILogger logger;

        public TagsRepository(PfsServerDbContext dbContext, ILoggerFactory loggerFactory)
        {
            dbCtx = dbContext;
            logger = loggerFactory.CreateLogger(typeof(Tag));
        }
 
        public IEnumerable<Tag> Get()
        {
            return dbCtx.Tags;
        }

        public Tag Get(int id)
        {
            return dbCtx.Tags.FirstOrDefault(f => f.Id == id);
        }

        public void Post(Tag entity)
        {
            dbCtx.Tags.Add(entity);
            dbCtx.SaveChanges();
        }

        public void Put(int id, Tag entity)
        {
            dbCtx.Tags.Update(entity);
            dbCtx.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = dbCtx.Tags.First(t => t.Id == id);
            dbCtx.Tags.Remove(entity);
            dbCtx.SaveChanges();
        }
    }

}
