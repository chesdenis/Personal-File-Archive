using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Shared.Abstractions
{
    public interface IPfsDbContext : IPfsODataCollections
    {
        void SaveChanges();
    }
}
