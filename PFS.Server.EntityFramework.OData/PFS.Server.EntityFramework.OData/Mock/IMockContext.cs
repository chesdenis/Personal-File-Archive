using PFS.Server.EntityFramework.OData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Mock
{
    public interface IMockContext
    {
        IEnumerable<Photo> Photos { get; }
    }
}