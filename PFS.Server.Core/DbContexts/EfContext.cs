using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using SQLite.CodeFirst;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace PFS.Server.Core.DbContexts
{
#if WinOnly
    public abstract class EfContext : DbContext, IPfsDbContext
    {

        public DbSet<Tag> Tags { get; set; }
        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;

        public DbSet<Video> Videos { get; set; }
        IEnumerable<Video> IPfsODataCollections.Videos => Videos;

        public DbSet<ContentSource> ContentSources { get; set; }
        IEnumerable<ContentSource> IPfsODataCollections.ContentSources => ContentSources;

        public DbSet<Job> Jobs { get; set; }
        IEnumerable<Job> IPfsODataCollections.Jobs => Jobs;

        public EfContext(string nameOrConnectionString) : base(nameOrConnectionString)
        {
        }

        protected override void OnModelCreating(DbModelBuilder builder)
        {
            SetupInitializer(builder);

            builder.Entity<Tag>().HasKey(m => m.Id);
            builder.Entity<Video>().HasKey(m => m.Id)
                .HasRequired<ContentSource>(s => s.ContentSource)
                .WithMany(s => s.Videos)
                .HasForeignKey(s => s.ContentSourceId);
            builder.Entity<ContentSource>().HasKey(m => m.Id);
            builder.Entity<Job>().HasKey(m => m.Id);

            base.OnModelCreating(builder);
        }

        protected abstract void SetupInitializer(DbModelBuilder builder);

        void IPfsDbContext.SaveChanges()
        {
            SaveChanges();
        }

        public object AddEntity<T>(T entity)
        {
            var dbSet = Set(entity.GetType());
            return dbSet.Add(entity);
        }

        public void RemoveEntity<T>(T entity)
        {
            var dbSet = Set(entity.GetType());
            dbSet.Remove(entity);
        }
         
        public object UpdateEntity<T>(T entity)
        {
            var dbSet = Set(entity.GetType());
            return dbSet.Attach(entity);
        }
    }

    public class MsSqlDbContext : EfContext
    {
        public MsSqlDbContext() : base(@"name=MsSql")
        {

        }

        protected override void SetupInitializer(DbModelBuilder builder)
        {
            Database.SetInitializer
                          (new CreateDatabaseIfNotExists<MsSqlDbContext>());
        }
    }

    public class SqLiteDbContext : EfContext
    {
        public SqLiteDbContext() : base("name=SqLite")
        {
        }

        protected override void SetupInitializer(DbModelBuilder builder)
        {
            Database.SetInitializer
                         (new SqliteCreateDatabaseIfNotExists<SqLiteDbContext>(builder));
        }
    }
#endif
}
