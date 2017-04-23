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
//    public class SqLiteDbContext : DbContext, IPfsDbContext
//    {
//        public DbSet<Tag> Tags { get; set; }
//        IEnumerable<Tag> IPfsODataCollections.Tags => Tags;

//        public DbSet<Video> Videos { get; set; }
//        IEnumerable<Video> IPfsODataCollections.Videos => Videos;

//        public DbSet<ContentSource> ContentSources { get; set; }
//        IEnumerable<ContentSource> IPfsODataCollections.ContentSources => ContentSources;

//        public DbSet<Job> Jobs { get; set; }
//        IEnumerable<Job> IPfsODataCollections.Jobs => Jobs;
        
//        void IPfsDbContext.SaveChanges()
//        {
//            SaveChanges();
//        }


//        public object AddEntity<T>(T entity)
//        {
//            throw new NotImplementedException();
//        }

//        public object UpdateEntity<T>(T entity)
//        {
//            throw new NotImplementedException();
//        }

//        public void RemoveEntity<T>(T entity)
//        {
//            throw new NotImplementedException();
//        }

//#if AnyOS

//        protected override void OnModelCreating(ModelBuilder builder)
//        {
//            builder.Entity<Tag>().HasKey(m => m.Id);
//            builder.Entity<Video>().HasKey(m => m.Id)
//                .HasRequired<ContentSource>(s=>s.ContentSource)
//                .WithMany(s=>s.Videos)
//                .HasForeignKey(s=>s.ContentSourceId);
//            builder.Entity<ContentSource>().HasKey(m => m.Id);
//            builder.Entity<Job>().HasKey(m => m.Id);

//            base.OnModelCreating(builder);
//        }

 
//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            optionsBuilder.UseSqlite("Filename=./PfsServer.db");
//        }
 

//        public object AddEntity<T>(T entity)
//        {
//            throw new NotImplementedException();
//        }


//        public void RemoveEntity<T>(T entity)
//        {
//            throw new NotImplementedException();
//        }


//        public object UpdateEntity<T>(T entity)
//        {
//            throw new NotImplementedException();
//        }

//#endif
   // }
}
