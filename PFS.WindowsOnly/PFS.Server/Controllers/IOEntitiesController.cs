using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.Controllers
{
    public class IOEntitiesController : ODataController
    {
        private readonly IOEntitiesRepository Rep;

        public IOEntitiesController(IOEntitiesRepository rep)
        {
            Rep = rep;
        }

        // GET odata/IOEntities/Default.GetDrives/
        [HttpGet]
        public PfsDrive GetDrive([FromODataUri]string DriveName)
        {
            return Rep.GetDrive(DriveName);
        }

        // GET odata/IOEntities/Default.GetDrive(DriveName='C')/
        [EnableQuery] [HttpGet]
        public IQueryable<PfsDrive> GetDrives()
        {
            return Rep.GetDrives().AsQueryable();
        }

        // GET odata/IOEntities/Default.GetFolder(DriveName='C',FolderRelativePath='dc-angular')/
        // GET odata/IOEntities/Default.GetFolder(DriveName='C',FolderRelativePath='dc-angular/tools')/
        [HttpGet]
        public PfsFolder GetFolder([FromODataUri]string DriveName, [FromODataUri] string FolderRelativePath)
        {
            return Rep.GetFolder(DriveName, FolderRelativePath);
        }

        // GET odata/IOEntities/Default.GetFolders(DriveName='C',FolderRelativePath='dc-angular')/
        // GET odata/IOEntities/Default.GetFolders(DriveName='C',FolderRelativePath='dc-angular/tools')/
        [HttpGet]
        public IQueryable<PfsFolder> GetFolders([FromODataUri]string DriveName, [FromODataUri] string FolderRelativePath)
        {
            return Rep.GetFolders(DriveName, FolderRelativePath).AsQueryable();
        }

        // GET odata/IOEntities/Default.GetFile(DriveName='C',FileRelativePath='dc-angular/gulpfile.js')/
        [HttpGet]
        public PfsFile GetFile([FromODataUri]string DriveName, [FromODataUri] string FileRelativePath)
        {
            return Rep.GetFile(DriveName, FileRelativePath);
        }

        // GET odata/IOEntities/Default.GetFiles(DriveName='C',FolderRelativePath='dc-angular')/
        [HttpGet]
        public IQueryable<PfsFile> GetFiles([FromODataUri]string DriveName, [FromODataUri] string FolderRelativePath)
        {
            return Rep.GetFiles(DriveName, FolderRelativePath).AsQueryable();
        }


    }
}