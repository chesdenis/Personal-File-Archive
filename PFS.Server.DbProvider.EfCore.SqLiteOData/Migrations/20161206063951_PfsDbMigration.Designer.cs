using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using PFS.Server.DbProvider.EfCore.SqLiteOData.Db;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Migrations
{
    [DbContext(typeof(PfsServerDbContext))]
    [Migration("20161206063951_PfsDbMigration")]
    partial class PfsDbMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431");

            modelBuilder.Entity("PFS.Server.Core.Entities.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Tags");
                });
        }
    }
}
