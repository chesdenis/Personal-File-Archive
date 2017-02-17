using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.DbProvider.Ef.MsSqlOData.Db.Providers;

namespace PFS.Server.DbProvider.Ef.MsSqlOData.Db
{
    public class PfsServerDbContext : DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;

        public IPfsDataProvider<Tag> TagsProvider { get; set; }

        public PfsServerDbContext()
        {
            TagsProvider = new TagsProvider(Tags);
        }

        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }
    }
}