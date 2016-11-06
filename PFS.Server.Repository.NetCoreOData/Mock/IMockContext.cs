using PFS.Server.Repository.NetCoreOData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFS.Server.Repository.NetCoreOData.Mock
{
    public interface IMockContext
    {
        IEnumerable<Book> Books { get; }
        IEnumerable<Document> Documents { get; }
        IEnumerable<Music> Musics { get; }
        IEnumerable<Photo> Photos { get; }
        IEnumerable<Video> Videos { get; }
     

    }
}
