using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PFS.Server.Core.Shared.Entities;

namespace PFS.Server.Core.Shared.Abstractions
{
    public interface IPfsDbContext : IPfsODataCollections
    {
        void SaveChanges();

        Tag AddEntity(Tag entity);
        Tag UpdateEntity(Tag entity);
        void RemoveEntity(Tag entity);
    }
}
