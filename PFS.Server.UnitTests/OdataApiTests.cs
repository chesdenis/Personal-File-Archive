using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PFS.Server.UnitTests.PFS.Server.Core.Shared.Entities;
using PFS.Server.UnitTests.Default;
using System.Collections.Generic;
using System.Linq;

namespace PFS.Server.UnitTests
{
    [TestClass]
    public class OdataApiTests
    {
        public const string MsSqlApiUrl = "http://localhost:64245/odata";
        public const string SqLiteODataUrl = "http://localhost:5020/odata";

        public Uri ApiUrl
        {
            get { return new Uri(MsSqlApiUrl); }
        }


        // add tag "One" id '1' 

        //add tags "two" id '2' "three" id '3'... "six" id '6'
        //Delete tags '1', '5'
        //read all tags ('2', '3', '4', '6')

        private void AddTagWithNameOne()
        {
            var dbContext = new Container(ApiUrl);

            dbContext.AddToTags(new Tag() {
                Id = 1,
                Name = "One"
            });


            dbContext.SaveChanges();

            var firstOne = dbContext.Tags.ByKey(1).GetValue();
            var firstOneName = firstOne.Name;

            Assert.AreEqual("One", firstOneName);
        }


        [TestMethod]
        public void TestTagsApi()
        {
            AddTagWithNameOne();
        }
    }
}
