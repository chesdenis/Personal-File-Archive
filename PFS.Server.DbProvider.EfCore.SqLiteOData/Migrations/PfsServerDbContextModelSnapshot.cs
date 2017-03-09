using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using PFS.Server.DbProvider.EfCore.SqLiteOData.Db;

namespace PFS.Server.DbProvider.EfCore.SqLiteOData.Migrations
{
    [DbContext(typeof(PfsServerDbContext))]
    partial class PfsServerDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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
