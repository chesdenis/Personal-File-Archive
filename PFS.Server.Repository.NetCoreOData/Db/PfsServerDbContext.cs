using Microsoft.EntityFrameworkCore;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using PFS.Server.Repository.NetCoreOData.Db.Tables;

namespace PFS.Server.Repository.NetCoreOData.Db
{

    public partial class PfsServerDbContext : DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        public IPfsODataTable<Tag> TagsTable { get; set; }

        public PfsServerDbContext()
        {
            TagsTable = new TagsDataTable(Tags);
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
