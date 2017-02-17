using Microsoft.EntityFrameworkCore;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.DbProvider.EfCore.SqLiteOData.Db.Providers;
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
