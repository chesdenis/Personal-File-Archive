
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Jobs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PFS.Server.JobsManager
{
    class Program
    {
        static void Main(string[] args)
        {
            JobsCollection.Execute();
        }
    }
}
