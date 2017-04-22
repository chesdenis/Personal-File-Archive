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

        public DbSet<Video> Videos { get; set; }
        IEnumerable<Video> IPfsODataCollections.Videos => Videos;

        public DbSet<ContentSource> ContentSources { get; set; }
        IEnumerable<ContentSource> IPfsODataCollections.ContentSources => ContentSources;

        public DbSet<Job> Jobs { get; set; }
        IEnumerable<Job> IPfsODataCollections.Jobs => Jobs;

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
            builder.Entity<Video>().HasKey(m => m.Id)
                .HasRequired<ContentSource>(s=>s.ContentSource)
                .WithMany(s=>s.Videos)
                .HasForeignKey(s=>s.ContentSourceId);
            builder.Entity<ContentSource>().HasKey(m => m.Id);
            builder.Entity<Job>().HasKey(m => m.Id);

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


        public object AddEntity<T>(T entity)
        {


#if WinOnly
            var dbSet = Set(entity.GetType());
            return dbSet.Add(entity);
#endif
#if AnyOS
            throw new NotImplementedException();
#endif
        }


        public void RemoveEntity<T>(T entity)
        {
#if WinOnly
            var dbSet = Set(entity.GetType());
            dbSet.Remove(entity);
#endif
#if AnyOS
            throw new NotImplementedException();
#endif

        }


        public object UpdateEntity<T>(T entity)
        {

#if WinOnly
            var dbSet = Set(entity.GetType());
            return dbSet.Attach(entity);
#endif
#if AnyOS
            throw new NotImplementedException();
#endif
        }
    }
}
