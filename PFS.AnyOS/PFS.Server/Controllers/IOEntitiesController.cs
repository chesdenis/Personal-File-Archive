using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using PFS.Server.Core.Entities;
using PFS.Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PFS.Server.Controllers
{
    [Route("odata/FsEntities")]
    public class FsEntitiesController : Controller
    {
        private readonly FsEntitiesRepository Rep;
        public FsEntitiesController(FsEntitiesRepository rep)
        {
            Rep = rep;
        }

        [HttpGet]
        [EnableQuery]
        public virtual IQueryable<FsEntity> Get()
        {
            return Rep.Get().AsQueryable();
        }
    }

    [Route("odata/IOEntities")]
    public class IOEntitiesController : Controller
    {
        private readonly IOEntitiesRepository Rep;

        public IOEntitiesController(IOEntitiesRepository rep)
        {
            Rep = rep;
        }

        // GET odata/IOEntities/Default.GetDrive(DriveName='C')/
        [HttpGet("Default.GetDrive(DriveName={driveName})")]
        public PfsDrive GetDrive(string driveName)
        {
            return Rep.GetDrive(driveName);
        }

        // GET odata/IOEntities/Default.GetDrives/
        [EnableQuery]
        [HttpGet("Default.GetDrives")]
        public IQueryable<PfsDrive> GetDrives()
        {
            return Rep.GetDrives().AsQueryable();
        }

        // GET odata/IOEntities/Default.GetFolder(DriveName='C',FolderRelativePath='dc-angular')/
        // GET odata/IOEntities/Default.GetFolder(DriveName='C',FolderRelativePath='dc-angular/tools')/
        [HttpGet("Default.GetFolder(DriveName={driveName},FolderRelativePath={folderRelativePath})")]
        public PfsFolder GetFolder(string driveName, string folderRelativePath)
        {
            return Rep.GetFolder(driveName, folderRelativePath);
        }

        // GET odata/IOEntities/Default.GetFolders(DriveName='C',FolderRelativePath='dc-angular')/
        // GET odata/IOEntities/Default.GetFolders(DriveName='C',FolderRelativePath='dc-angular/tools')/
        [EnableQuery]
        [HttpGet("GetFolders(DriveName={driveName},FolderRelativePath={folderRelativePath})")]
        public IQueryable<PfsFolder> GetFolders(string driveName, string folderRelativePath)
        {
            return Rep.GetFolders(driveName, folderRelativePath).AsQueryable();
        }

        // GET odata/IOEntities/Default.GetFile(DriveName='C',FileRelativePath='dc-angular/gulpfile.js')/
        [HttpGet("GetFile(DriveName={driveName},FileRelativePath={fileRelativePath})")]
        public PfsFile GetFile(string driveName, string fileRelativePath)
        {
            return Rep.GetFile(driveName, fileRelativePath);
        }

        // GET odata/IOEntities/Default.GetFiles(DriveName='C',FolderRelativePath='dc-angular')/
        [EnableQuery]
        [HttpGet("GetFiles(DriveName={driveName},FolderRelativePath={folderRelativePath})")]
        public IQueryable<PfsFile> GetFiles(string driveName, string folderRelativePath)
        {
            return Rep.GetFiles(driveName, folderRelativePath).AsQueryable();
        }


    }
}