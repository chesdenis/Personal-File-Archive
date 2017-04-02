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
            builder.EntitySet<Tag>("Tags");

            return builder;
        }

        public static ODataConventionModelBuilder BuildFilesModel(this ODataConventionModelBuilder builder)
        {
            builder.EntitySet<PfsFile>("Files").EntityType.HasKey(k => k.Path);

            return builder;
        }

        public static ODataConventionModelBuilder BuildFoldersModel(this ODataConventionModelBuilder builder)
        {
            var entitySet = builder.EntitySet<PfsFolder>("Folders");

            var entityType = entitySet.EntityType;
            entityType.HasKey(k => k.Path);
            entityType.Function("GetChildFolders").Returns<IQueryable<PfsFolder>>();
            entityType.Function("GetChildFiles").Returns<IQueryable<PfsFile>>();

            return builder;
        }
    }
}
