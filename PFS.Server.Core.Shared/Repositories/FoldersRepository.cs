using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System.Collections.Generic;
using System.Linq;
using System;

namespace PFS.Server.Core.Shared.Repositories
{
    public class FoldersRepository : IPfsRepository<Folder>
    {
        protected readonly IPfsDbContext DbCtx;

        public FoldersRepository(IPfsDbContext dbCtx) 
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
 
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Folder> Get()
        {
            throw new NotImplementedException();
        }

        public Folder Get(int id)
        {
            throw new NotImplementedException();
        }

        public Folder Post(Folder entity)
        {
            throw new NotImplementedException();
        }

        public Folder Put(int id, Folder entity)
        {
            throw new NotImplementedException();
        }
    }


}
