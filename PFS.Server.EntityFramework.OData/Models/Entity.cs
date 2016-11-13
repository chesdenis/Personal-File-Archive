using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Models
{
    public class Entity
    {
        public int Id { get; set; }
        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
    }
}