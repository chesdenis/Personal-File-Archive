using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using System.Collections.Generic;
using System.Linq;
using System;
using System.IO;

namespace PFS.Server.Core.Shared.Repositories
{
    public class FilesRepository : IPfsRepository<PfsFile>
    {
        protected readonly IPfsDbContext DbCtx;

        public FilesRepository(IPfsDbContext dbCtx) 
        {
            DbCtx = dbCtx;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PfsFile> Get()
        {
            var parentDir = new DirectoryInfo("/");
            return parentDir
                .GetFiles()
                .Select(s =>
                   new PfsFile()
                   {
                       Name = s.Name,
                       Path = s.FullName
                   })
                .ToArray();
        }

        public PfsFile Get(string path)
        {
            var file = new FileInfo(path);
            return new PfsFile() { Name = file.Name, Path = file.FullName };
        }

        public PfsFile Get(int id)
        {
            throw new NotImplementedException();
        }


        public PfsFile Post(PfsFile entity)
        {
            throw new NotImplementedException();
        }

        public PfsFile Put(int id, PfsFile entity)
        {
            throw new NotImplementedException();
        }
    }


}
