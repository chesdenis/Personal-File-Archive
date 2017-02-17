using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PFS.Server.DbProvider.Ef.MsSqlOData.Db.Providers
{
    public class TagsProvider : IPfsDataProvider<Tag>
    {
        protected DbSet<Tag> DbTable { get; private set; }

        public TagsProvider(DbSet<Tag> dbTable)
        {
            DbTable = dbTable;
        }

        public IEnumerable<Tag> Rows
        {
            get
            {
                return DbTable;
            }
        }

        public void Add(Tag entity)
        {
            DbTable.Add(entity);
        }

        public void Remove(Tag entity)
        {
            DbTable.Remove(entity);
        }

        public void Update(Tag entity)
        {
            var existedEntity = DbTable.FirstOrDefault(f => f.Id == entity.Id);
            if (existedEntity == null) return;

            existedEntity.Name = entity.Name;
        }
    }
}