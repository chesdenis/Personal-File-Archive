using PFS.Server.EntityFramework.OData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Mock
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

        private List<Photo> _photos => idsRange.Select(s => new Photo() { Id = s, Name = "photo:" + namesRange[s] }).ToList();
        public IEnumerable<Photo> Photos => _photos;
    }
}