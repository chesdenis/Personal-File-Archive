using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PFS.Server.Core.Entities;

namespace PFS.Server.Core.Abstractions
{
    public interface IPfsDbContext : IPfsODataCollections
    {
        void SaveChanges();

        object AddEntity<T>(T entity);
        object UpdateEntity<T>(T entity);
        void RemoveEntity<T>(T entity);
    }
}
