using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PFS.Server.Repository.NetCoreOData.Model;

namespace PFS.Server.Repository.NetCoreOData.Db
{

    public partial class PfsServerDbContext: DbContext
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Tag>().HasKey(m => m.Id);
            base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./PfsServer.db");
        }
    }

    public partial class PfsServerDbContext
    {
        public DbSet<Tag> Tags { get; set; }
    }


    public partial class PfsServerDbContext: IPfsODataCollections
    {
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;
    }

    public interface IPfsODataCollections
    {
        IEnumerable<Tag> Tags { get; }
    }
}
