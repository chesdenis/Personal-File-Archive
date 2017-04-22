using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Enums;
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
        public class Instance
        {
            [DataMember]
            public string FileName { get; set; }

            [DataMember]
            public int Order { get; set; }

            [DataMember]
            public int Version { get; set; }

            [DataMember]
            public ViewOn TargetDevice { get; set; }
        }

        [DataMember]
        public Instance[] InstancesInfo { get; set; }

        public string AsJson() { return this.Serialize(); }
    }
}
