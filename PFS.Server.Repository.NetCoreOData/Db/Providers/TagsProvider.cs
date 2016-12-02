using Microsoft.EntityFrameworkCore;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Repository.NetCoreOData.Db.Providers
{
    public class TagsProvider: IPfsDataProvider<Tag>
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
            DbTable.Update(entity);
        }
    }

}
