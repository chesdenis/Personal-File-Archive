using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
 

namespace PFS.Server.Controllers
{
    public class JasmineTestsController: Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}