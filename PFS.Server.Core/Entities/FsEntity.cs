using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace PFS.Server.Core.Entities
{
    public enum FsEntityType
    {
        Disk,
        Folder,
        File        
    }

    public class FsEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public FsEntityType Type { get; set; }
        public string Path { get; set; }
    }
}
