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

        public PfsServerDbContext():
            base("name=PfsServerConnectionString")
        {
            Database.SetInitializer
                (new CreateDatabaseIfNotExists<PfsServerDbContext>());
        }

        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }

    public partial class PfsServerDbContext 
    {

        public Tag AddEntity(Tag entity)
        {
            return Tags.Add(entity);
        }

        public void RemoveEntity(Tag entity)
        {
            Tags.Remove(entity);
        }

        public Tag UpdateEntity(Tag entity)
        {
            var existedEntity = Tags.First(f => f.Id == entity.Id);

            existedEntity.Name = entity.Name;

            return existedEntity;
        }
    }
}