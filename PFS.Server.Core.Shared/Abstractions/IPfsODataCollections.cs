using PFS.Server.Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Shared.Abstractions
{
    public interface IPfsODataCollections
    {
        IEnumerable<Tag> Tags { get; }     
        IEnumerable<FSObject> FSObjects { get; }    
    }
}
