using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace PFS.Server.JasmineTests
{
    public class Program
    {
        public static void Main(string[] args)
        {
            throw new Exception("Please read information for developers and use Task Runner Explorer.");

            var host = new WebHostBuilder()
               .UseKestrel()
               .UseContentRoot(Directory.GetCurrentDirectory())
               .UseIISIntegration()
               .UseStartup<Startup>()
               .Build();

            host.Run();
        }
    }
}
