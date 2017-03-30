using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System.Collections.Generic;
using System.Linq;
using System;
using System.IO;

namespace PFS.Server.Core.Shared.Repositories
{
    public class FoldersRepository : IPfsRepository<PfsFolder>
    {
        protected readonly IPfsDbContext DbCtx;
        
        public FoldersRepository(IPfsDbContext dbCtx) 
        {
            DbCtx = dbCtx;
        }
        
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PfsFolder> Get()
        {
            var parentDir = new DirectoryInfo("/");
            return parentDir
                .GetDirectories()
                .Select(s =>
                   new PfsFolder()
                   {
                       Name = s.Name,
                       Path = s.FullName
                   })
                .ToArray();
        }

        public PfsFolder Get(string path)
        {
            var dir = new DirectoryInfo(path);
            return new PfsFolder() { Name = dir.Name, Path = dir.FullName };
        }

        public IEnumerable<PfsFolder> GetChildFolders(string folderPath = "")
        {
            if (string.IsNullOrEmpty(folderPath)) folderPath = "/";

            var parentDir = new DirectoryInfo(folderPath);

            return parentDir.GetDirectories()
                   .Select(s =>
                   new PfsFolder()
                   {
                       Name = s.Name,
                       Path = s.FullName
                   }).ToArray();
        }

        public IEnumerable<PfsFile> GetChildFiles(string folderPath = "")
        {
            if (string.IsNullOrEmpty(folderPath)) return new PfsFile[] { };

            var parentDir = new DirectoryInfo(folderPath);

            return parentDir.GetFiles()
                   .Select(s =>
                   new PfsFile()
                   {
                       Name = s.Name,
                       Path = s.FullName
                   }).ToArray();
        }

        public PfsFolder Get(int id)
        {
            throw new NotImplementedException();
        }


        public PfsFolder Post(PfsFolder entity)
        {
            throw new NotImplementedException();
        }

        public PfsFolder Put(int id, PfsFolder entity)
        {
            throw new NotImplementedException();
        }
    }


}
