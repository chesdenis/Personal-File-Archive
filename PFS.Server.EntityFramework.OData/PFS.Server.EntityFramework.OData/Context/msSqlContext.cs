using PFS.Server.EntityFramework.OData.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Context
{
    public class MsSqlContext : DbContext
    {
        public MsSqlContext() : base("MsSqlContext")
        {}

        public DbSet<Entity> Entities { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}