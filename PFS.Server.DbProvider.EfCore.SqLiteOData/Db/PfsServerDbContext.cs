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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Tag>().HasKey(m => m.Id);
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
        public void AddEntity(Tag entity)
        {
            Tags.Add(entity);
        }

        public void UpdateEntity(Tag entity)
        {
            Tags.Update(entity);
        }

        public void RemoveEntity(Tag entity)
        {
            Tags.Remove(entity);
        }
    }
}
