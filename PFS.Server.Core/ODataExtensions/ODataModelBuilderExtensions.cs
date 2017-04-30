using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
#if WinOnly
using System.Web.OData.Builder;
#endif
#if AnyOS
using Microsoft.AspNetCore.OData.Builder;
#endif

namespace PFS.Server.Core
{
    public static class ODataModelBuilderExtensions
    {
        public static ODataConventionModelBuilder BuildTagsModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Tag>("Tags").EntityType.HasKey(k => k.Id);
            return builder;
        }

        public static ODataConventionModelBuilder BuildContentSourcesPathsModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<ContentSource>("ContentSources").EntityType.HasKey(k => k.Id);
            return builder;
        }

        public static ODataConventionModelBuilder BuildJobsModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Job>("Jobs").EntityType.HasKey(k => k.Id);
            builder.AddEnumType(typeof(JobStatus));

            var entityTypeCollection = builder.EntityType<Job>().Collection;

            var executeJob = entityTypeCollection.Action("ExecuteJob");
            executeJob.Parameter<int>("JobId");

            return builder;
        }

        public static ODataConventionModelBuilder BuildVideosModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<Video>("Videos").EntityType.HasKey(k => k.Id);
            return builder;
        }

        public static ODataConventionModelBuilder BuildIOEntitiesModel(this ODataConventionModelBuilder builder)
        {
            var entityType = builder.EntitySet<IOPfsEntity>("IOEntities").EntityType;
            entityType.HasKey(k => k.Path);

            var entityTypeCollection = builder.EntityType<IOPfsEntity>().Collection;

            var getDriveFunc = entityTypeCollection.Function("GetDrive");
            getDriveFunc.Parameter<string>("DriveName");
            getDriveFunc.Returns<PfsDrive>();

            var getDrivesFunc = entityTypeCollection.Function("GetDrives");
            getDrivesFunc.Returns<IQueryable<PfsDrive>>();

            var getFolderFunc = entityTypeCollection.Function("GetFolder");
            getFolderFunc.Parameter<string>("DriveName");
            getFolderFunc.Parameter<string>("FolderRelativePath");
            getFolderFunc.Returns<PfsFolder>();

            var getFoldersFunc = entityTypeCollection.Function("GetFolders");
            getFoldersFunc.Parameter<string>("DriveName");
            getFoldersFunc.Parameter<string>("FolderRelativePath");
            getFoldersFunc.Returns<IQueryable<PfsFolder>>();

            var getFileFunc = entityTypeCollection.Function("GetFile");
            getFileFunc.Parameter<string>("DriveName");
            getFileFunc.Parameter<string>("FileRelativePath");
            getFileFunc.Returns<PfsFile>();

            var getFilesFunc = entityTypeCollection.Function("GetFiles");
            getFilesFunc.Parameter<string>("DriveName");
            getFilesFunc.Parameter<string>("FolderRelativePath");
            getFilesFunc.Returns<IQueryable<PfsFile>>();

            return builder;
        }
    }
}
