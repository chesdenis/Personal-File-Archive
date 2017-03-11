using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System.Collections.Generic;
using System.Linq;
using System;

namespace PFS.Server.Core.Shared.Repositories
{
    public class FilesRepository : IPfsRepository<File>
    {
        protected readonly IPfsDbContext DbCtx;

        public FilesRepository(IPfsDbContext dbCtx) 
        {
            DbCtx = dbCtx;
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

        public IEnumerable<File> Get()
        {
            throw new NotImplementedException();
        }

        public File Get(int id)
        {
            throw new NotImplementedException();
        }

        public File Post(File entity)
        {
            throw new NotImplementedException();
        }

        public File Put(int id, File entity)
        {
            throw new NotImplementedException();
        }
    }


}
