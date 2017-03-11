using Microsoft.EntityFrameworkCore;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Db
{
    public partial class PfsServerDbContext : DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;

        public DbSet<File> Files { get; set; }
        IEnumerable<File> IPfsODataCollections.Files => Files;

        public DbSet<Folder> Folders { get; set; }
        IEnumerable<Folder> IPfsODataCollections.Folders => Folders;
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Tag>().HasKey(m => m.Id);
            builder.Entity<File>().HasKey(m => m.Id);
            builder.Entity<Folder>().HasKey(m => m.Id);

            base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./PfsServer.db");
        }

        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }
    }

    public partial class PfsServerDbContext
    {
        public Tag AddEntity(Tag entity)
        {
            var changes = Tags.Add(entity);
            return changes.Entity;
        }
                
        public void RemoveEntity(Tag entity)
        {
            Tags.Remove(entity);
        }

        public Tag UpdateEntity(Tag entity)
        {
            var changes = Tags.Update(entity);
            return changes.Entity;
        }

    }
}
