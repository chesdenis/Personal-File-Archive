using System.Collections.Generic;

namespace PFS.Server.EntityFramework.OData.Models
{
    public class Photo : Entity             
    {
        public IEnumerable<Tag> Tags { get; set; }
    }
}