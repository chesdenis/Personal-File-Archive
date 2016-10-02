using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PFS.Server.MvcApp.Controllers
{
    public class PhotosController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Home/Index.cshtml");
        }

        public IActionResult Default()
        {
            return View("~/Views/Home/Index.cshtml");
        }

        public IActionResult Tags()
        {
            return View("~/Views/Home/Index.cshtml");
        }

        public IActionResult Albums()
        {
            return View("~/Views/Home/Index.cshtml");
        }

        public IActionResult Dates()
        {
            return View("~/Views/Home/Index.cshtml");
        }

        public IActionResult Places()
        {
            return View("~/Views/Home/Index.cshtml");
        }
    }
}
