using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PFS.Server.JobsManager
{
    class Program
    {
        static Timer JobTimer { get; set; }

        static void Main(string[] args)
        {
            Console.WriteLine("PFS.Server.JobsManager started...");
            Console.WriteLine("Press any key to close.");

            JobTimer = new Timer(jobTimerFired,null,0, 
                (int)TimeSpan.FromSeconds(10).TotalMilliseconds);

            Console.ReadLine();
        }

        private static void jobTimerFired(object state)
        {
            Console.WriteLine("Fired");
        }
         
    }
}
