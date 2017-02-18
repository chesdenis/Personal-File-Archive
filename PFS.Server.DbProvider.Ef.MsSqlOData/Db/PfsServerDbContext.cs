using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;

namespace PFS.Server.DbProvider.Ef.MsSqlOData.Db
{
    public partial class PfsServerDbContext : DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;
        
        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }
    }

    public partial class PfsServerDbContext 
    {

        public void AddEntity(Tag entity)
        {
            Tags.Add(entity);
        }

        public void RemoveEntity(Tag entity)
        {
            Tags.Remove(entity);
        }

        public void UpdateEntity(Tag entity)
        {
            var existedEntity = Tags.FirstOrDefault(f => f.Id == entity.Id);
            if (existedEntity == null) return;

            existedEntity.Name = entity.Name;
        }
    }
}