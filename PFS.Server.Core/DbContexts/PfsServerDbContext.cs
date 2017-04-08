using System;
using System.Collections.Generic;
using System.Text;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System.Linq;
#if AnyOS
using Microsoft.EntityFrameworkCore;
#endif
#if WinOnly
using System.Data.Entity;
#endif

namespace PFS.Server.Core.DbContexts
{
    public partial class PfsServerDbContext:DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;


#if WinOnly
        public PfsServerDbContext() :
         base("name=PfsServerConnectionString")
        {
            Database.SetInitializer
                (new CreateDatabaseIfNotExists<PfsServerDbContext>());
        }
#endif
        protected override void OnModelCreating(
#if WinOnly
            DbModelBuilder builder
#endif
#if AnyOS
            ModelBuilder builder
#endif
            )
        {
            builder.Entity<Tag>().HasKey(m => m.Id);

            base.OnModelCreating(builder);
        }

#if AnyOS
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./PfsServer.db");
        }
#endif

        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }
    }

    public partial class PfsServerDbContext
    {

#if WinOnly
        public Tag AddEntity(Tag entity)
        {
            return Tags.Add(entity);
        }
#endif
#if AnyOS
        public Tag AddEntity(Tag entity)
        {
            var changes = Tags.Add(entity);
            return changes.Entity;
        }
#endif
        public void RemoveEntity(Tag entity)
        {
            Tags.Remove(entity);
        }

#if WinOnly
        public Tag UpdateEntity(Tag entity)
        {
            var existedEntity = Tags.First(f => f.Id == entity.Id);

            existedEntity.Name = entity.Name;

            return existedEntity;
        }
#endif
#if AnyOS
        public Tag UpdateEntity(Tag entity)
        {
            var changes = Tags.Update(entity);
            return changes.Entity;
        }
#endif

    }
}
