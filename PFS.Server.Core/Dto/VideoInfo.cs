using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Extensions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PFS.Server.Core.Dto
{
    [DataContract]
    public class VideoInfo
    {
        [DataContract]
        public class VideoInstance
        {
            [DataMember]
            public string Path { get; set; }

            [DataMember]
            public ViewOn TargetDevice { get; set; }
        }

        [DataMember]
        public VideoInstance[] Instances { get; set; }

        public string AsJson() { return this.Serialize(); }
    }
}
