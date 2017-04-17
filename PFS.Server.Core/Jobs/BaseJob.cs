using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PFS.Server.Core.Jobs
{
    [DataContract]
    public abstract class BaseArgs
    {

    }

    public abstract class BaseJob
    {         
        public abstract void Execute(BaseArgs args);
        public abstract BaseArgs DeserializeArgs(string argsAsJson);
    }
}
