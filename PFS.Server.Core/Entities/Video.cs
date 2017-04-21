using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace PFS.Server.Core.Entities
{
    public class Video : IEntity
    {
        public int Id { get ; set ; }
        public string Name { get; set; }
        public string Data { get; set; }
    }
}
