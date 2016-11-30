using Microsoft.EntityFrameworkCore;
using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Repository.NetCoreOData.Db.Tables
{
    public class TagsDataTable : IPfsODataTable<Tag>
    {
        protected DbSet<Tag> DbTable { get; private set; }

        public TagsDataTable(DbSet<Tag> dbTable)
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

        void IPfsODataTable<Tag>.Add(Tag entity)
        {
            DbTable.Add(entity);
        }

        void IPfsODataTable<Tag>.Remove(Tag entity)
        {
            DbTable.Remove(entity);
        }

        void IPfsODataTable<Tag>.Update(Tag entity)
        {
            DbTable.Update(entity);
        }
    }

}
