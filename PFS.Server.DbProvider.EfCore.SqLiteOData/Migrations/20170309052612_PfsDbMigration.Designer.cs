using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using PFS.Server.DbProvider.EfCore.SqLiteOData.Db;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Migrations
{
    [DbContext(typeof(PfsServerDbContext))]
    [Migration("20170309052612_PfsDbMigration")]
    partial class PfsDbMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431");

            modelBuilder.Entity("PFS.Server.Core.Shared.Entities.File", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("Path");

                    b.HasKey("Id");

                    b.ToTable("Files");
                });

            modelBuilder.Entity("PFS.Server.Core.Shared.Entities.Folder", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("Path");

                    b.HasKey("Id");

                    b.ToTable("Folders");
                });

            modelBuilder.Entity("PFS.Server.Core.Shared.Entities.Tag", b =>
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
