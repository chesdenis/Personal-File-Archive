using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PFS.Server.Repository.NetCoreOData.Model;

namespace PFS.Server.Repository.NetCoreOData.Mock
{
    public class MockContext : IMockContext
    {
        private readonly List<int> idsRange = new List<int>() {
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        };

        private readonly List<string> namesRange = new List<string>() {
            "Mr. Nice",
            "Narco",
            "Bombasto",
            "Celeritas",
            "Magneta",
            "RubberMan",
            "Dynama",
            "Dr IQ",
            "Magma",
            "Tornado",
        };

        private List<Book> _books => idsRange
            .Select(s => new Book() { Id = s, Name = "book:" + namesRange[s]}).ToList();
        public IEnumerable<Book> Books => _books;
        
        private List<Document> _documents => idsRange
            .Select(s => new Document() { Id = s, Name = "document:" + namesRange[s] }).ToList();
        public IEnumerable<Document> Documents => _documents;

        private List<Music> _musics => idsRange
            .Select(s => new Music() { Id = s, Name = "music:" + namesRange[s] }).ToList();
        public IEnumerable<Music> Musics => _musics;

        private List<Photo> _photos => idsRange
            .Select(s => new Photo() { Id = s, Name = "photo:" + namesRange[s] }).ToList();
        public IEnumerable<Photo> Photos => _photos;
        
        private List<Video> _videos => idsRange
          .Select(s => new Video() { Id = s, Name = "video:" + namesRange[s] }).ToList();
        public IEnumerable<Video> Videos => _videos;
    }
}
