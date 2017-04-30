#if AnyOS
using Microsoft.EntityFrameworkCore;
#endif
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PFS.Server.Core.DbContexts
{
#if AnyOS
    public abstract class EfCoreContext : DbContext, IPfsDbContext
    {
        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;

        public DbSet<Video> Videos { get; set; }
        IEnumerable<Video> IPfsODataCollections.Videos => Videos;

        public DbSet<ContentSource> ContentSources { get; set; }
        IEnumerable<ContentSource> IPfsODataCollections.ContentSources => ContentSources;

        public DbSet<Job> Jobs { get; set; }
        IEnumerable<Job> IPfsODataCollections.Jobs => Jobs;

        //public Dictionary<string, DbSet<object>> DbSetDict { get; set; }

        //public EfCoreContext()
        //{
        //    DbSetDict.Add()
        //}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Tag>().HasKey(m => m.Id);
            builder.Entity<Video>().HasKey(m => m.Id);
            builder.Entity<ContentSource>().HasKey(m => m.Id);
            builder.Entity<Job>().HasKey(m => m.Id);

            base.OnModelCreating(builder);
        }


        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }

        public object AddEntity<T>(T entity)
        {
            if (entity is Tag) {
                var tag = entity as Tag;
                return Tags.Add(tag);
            }

            throw new NotImplementedException();
        }

        public void RemoveEntity<T>(T entity)
        {
            if (entity is Tag)
            {
                var tag = entity as Tag;
                Tags.Remove(tag);
            }
        }

        public object UpdateEntity<T>(T entity)
        {
            if (entity is Tag)
            {
                var tag = entity as Tag;
                return Tags.Attach(tag);
            }

            throw new NotImplementedException();
        }
    }

    public class SqLiteDbContext : EfCoreContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./PfsServer.sqlite");
        }
    }
#endif
}
