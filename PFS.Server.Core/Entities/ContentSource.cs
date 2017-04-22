using PFS.Server.Core.Abstractions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PFS.Server.Core.Entities
{
    public class ContentSource: IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string DriveName { get; set; }
        public string Path { get; set; }

        public virtual ICollection<Video> Videos { get; private set; }
    }
}
