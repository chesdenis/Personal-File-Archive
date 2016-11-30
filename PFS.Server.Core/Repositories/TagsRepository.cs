using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace PFS.Server.Core.Repositories
{
    public class TagsRepository : BaseRepository<Tag>
    {
        public TagsRepository(IPfsDbContext dbCtx, ILoggerFactory loggerFactory) 
            : base(dbCtx, loggerFactory)
        {
        }

        protected override IPfsODataTable<Tag> Table
        {
            get
            {
                return DbCtx.Tags;
            }
        }
    }
}
