using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
//using Simple.OData.Client;
using PFS.Server.Core.Shared.Entities;
using Default;
using Microsoft.OData.Client;

namespace PFS.Server.UnitTests
{
    [TestClass]
    public class OdataApiTests
    {
        public const string MsSqlApiUrl = "http://localhost:5020/odata";
        public const string MsSqlApiDebugUrl = "http://localhost:64245/odata";
        public const string SqLiteODataUrl = "http://localhost:5020/odata";
        public const string SqLiteODataDebugUrl = "http://localhost:64238/odata";

        public Uri ApiUrl
        {
            get { return new Uri(SqLiteODataDebugUrl); }
        }

        private Container _dbContext = null;
        public Container DbContext
        {
            get {
                if (_dbContext == null)
                {
                    _dbContext = new Container(ApiUrl);
                    _dbContext.BuildingRequest += (object sender, BuildingRequestEventArgs e) => 
                    {
                       e.Headers.Remove("Accept");
                    };
                }

                return _dbContext;
            }
        }
         
        // add tag "One" id '1' 

        //add tags "two" id '2' "three" id '3'... "six" id '6'
        //Delete tags '1', '5'
        //read all tags ('2', '3', '4', '6')

        [TestMethod]
        public void ReadFirst10Tags()
        { 
            var tags = DbContext.Tags.Execute();

            foreach (var tag in tags)
            {
                Console.WriteLine(tag.Name);
            }
        }
         

        [TestMethod]
        public void AddTagWithNameOne()
        { 
            var testTagName = "One";

            DbContext.AddToTags(new Tag() { Name = testTagName });
            var responses = DbContext.SaveChanges();
            var response = responses.First();

            var changeResponse = (ChangeOperationResponse)response;
            var entityDescriptor = (EntityDescriptor)changeResponse.Descriptor;
            var tagCreated = (Tag)entityDescriptor.Entity;
            var tagCreatedId = tagCreated.Id;
            
            var existedTag = DbContext.Tags.ByKey(tagCreatedId).GetValue();
            Assert.AreEqual(testTagName, existedTag.Name);

            DbContext.DeleteObject(existedTag);
            DbContext.SaveChanges();

            existedTag = DbContext.Tags.ByKey(tagCreatedId).GetValue();

            Assert.IsNull(existedTag);
        }
        
    }
}
