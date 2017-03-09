using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Core.Shared.Entities
{
    public class File
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
    }
}
