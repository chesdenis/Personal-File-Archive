using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Models
{
    public class Photo : Entity             
    {
        public IEnumerable<Tag> Tags { get; set; }
    }
}