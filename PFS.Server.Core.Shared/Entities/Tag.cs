using PFS.Server.Core.Shared.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Shared.Entities
{
    public class Tag : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int MainParentId { get; set; }
        public int SecondaryParentId { get; set; }
    }
}
