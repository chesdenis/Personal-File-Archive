using PFS.Server.Core.Shared.Abstractions;
using PFS.Server.Core.Shared.Entities;
using PFS.Server.Core.Shared.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace PFS.Server.DbProvider.Ef.MsSqlOData.Controllers
{
    [EnableQuery]
    public class FSObjectsController : ODataController
    {
        private readonly FSObjectsRepository Rep;

        public FSObjectsController(FSObjectsRepository rep)
        {
            Rep = rep;
        }

        [EnableQuery]
        public HttpResponseMessage GetFolders([FromODataUri]string folderPath)
        {
            HttpResponseMessage response = null;

            var entities = Rep.GetFolders(folderPath);
            if (entities != null)
            {
                response = Request.CreateResponse(HttpStatusCode.OK, entities);
                response.Headers.Location = Request.RequestUri;

                return response;
            }

            response = Request.CreateResponse(HttpStatusCode.NoContent);
            response.Headers.Location = Request.RequestUri;

            return response;
        }

        public HttpResponseMessage GetFiles([FromODataUri] string folderPath)
        {
            HttpResponseMessage response = null;

            var entities = Rep.GetFiles(folderPath);
            if (entities != null)
            {
                response = Request.CreateResponse(HttpStatusCode.OK, entities);
                response.Headers.Location = Request.RequestUri;

                return response;
            }

            response = Request.CreateResponse(HttpStatusCode.NoContent);
            response.Headers.Location = Request.RequestUri;

            return response;
        }
    }
}