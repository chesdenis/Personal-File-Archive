using System;
using System.Collections.Generic;
using System.Text;

namespace PFS.Server.Core.Entities
{
    public class IOPfsEntity
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }

    public class PfsDrive 
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }

    public class PfsFile 
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }

    public class PfsFolder 
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }
}
