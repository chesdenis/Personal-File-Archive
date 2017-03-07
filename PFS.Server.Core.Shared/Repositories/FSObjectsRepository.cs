using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System.Collections.Generic;
using System.Linq;
using System;

namespace PFS.Server.Core.Shared.Repositories
{
    public class FSObjectsRepository : IPfsRepository<FSObject>
    {
        protected readonly IPfsDbContext DbCtx;

        public FSObjectsRepository(IPfsDbContext dbCtx) 
        {
            DbCtx = dbCtx;
        }
        
        public IEnumerable<Folder> GetFolders(string folderPath = "")
        {
            return new Folder[] {
                new Folder(){ Name ="Folder1", Path = "PathFolder1" },
                new Folder(){ Name ="Folder2", Path = "PathFolder2" },
                new Folder(){ Name ="Folder3", Path = "PathFolder3" },
                new Folder(){ Name ="Folder4", Path = "PathFolder4" }
            };
        }

        public IEnumerable<File> GetFiles(string folderPath)
        {
            return new File[]
            {
                new File(){ Name = "File1", Path = "PathToFile1" },
                new File(){ Name = "File2", Path = "PathToFile2" },
                new File(){ Name = "File3", Path = "PathToFile3" },
                new File(){ Name = "File4", Path = "PathToFile4" }
            };
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FSObject> Get()
        {
            throw new NotImplementedException();
        }

        public FSObject Get(int id)
        {
            throw new NotImplementedException();
        }

        public FSObject Post(FSObject entity)
        {
            throw new NotImplementedException();
        }

        public FSObject Put(int id, FSObject entity)
        {
            throw new NotImplementedException();
        }
    }


}
