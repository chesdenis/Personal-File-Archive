using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Repository.NetCoreOData.Db.Providers;

namespace PFS.Server.Repository.NetCoreOData.Db
{
 
    public partial class PfsServerDbContext : DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;
        
        public IPfsDataProvider<Tag> TagsProvider { get; set; }

        public PfsServerDbContext()
        {
           TagsProvider = new TagsProvider(Tags);
        }

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
     
}
