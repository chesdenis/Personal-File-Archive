using PFS.Server.Core.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace PFS.Server.Core.Jobs
{
    public class ReadItemsPropsInFolderJob:BaseJob
    {        
        [DataContract]
        public class Args:BaseArgs
        {
            [DataMember]
            public string TestVar1 { get; set; }

            [DataMember]
            public string TestVar2 { get; set; }
        }

        public override void Execute(BaseArgs args)
        {
            Console.WriteLine("Start executing ReadItemsPropsInFolderJob...");

            var jobArgs = (Args)args;
            Console.WriteLine(jobArgs.TestVar2);
        }

        public override BaseArgs DeserializeArgs(string argsAsJson)
        {
            return argsAsJson.Deserialize<Args>();
        }
    }
}
