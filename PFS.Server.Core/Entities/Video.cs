using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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

        public string IODirPath { get; set; }
        public string RelDirPath { get; set; }

        //[ForeignKey("ContentSourceId")]
        public virtual ContentSource ContentSource { get; set; }
        public int ContentSourceId { get; set; }
    }
}
