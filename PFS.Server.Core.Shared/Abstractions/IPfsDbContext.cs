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

        void AddEntity(Tag entity);
        void UpdateEntity(Tag entity);
        void RemoveEntity(Tag entity);
    }
}
