using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Abstractions
{
    public interface IPfsODataCollections
    {
        IEnumerable<Tag> Tags { get; }
        IEnumerable<Video> Videos { get; }
        IEnumerable<ContentSource> ContentSources { get; }
        IEnumerable<Job> Jobs { get; } 
    }
}
