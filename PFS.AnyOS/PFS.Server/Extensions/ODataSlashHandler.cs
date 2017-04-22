using Microsoft.AspNetCore.OData.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.OData.Edm;
using System.Text;

namespace PFS.Server.Extensions
{
    public class ODataSlashHandler : DefaultODataPathHandler
    {
        private const string EscapedQuote = "'";

        public ODataSlashHandler(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        //public override string Link(ODataPath path)
        //{
        //    throw new NotImplementedException();

        //    //return path.ToString();
        //}

        public override ODataPath Parse(IEdmModel model, string serviceRoot, string path)
        {
            if (!path.Contains(EscapedQuote))
            {
                return base.Parse(model, serviceRoot, path);
            }

            var pathBuilder = new StringBuilder();
            var queryStringIndex = path.IndexOf('?');
            if (queryStringIndex == -1)
            {
                EscapeSlashBackslash(path, pathBuilder);
            }
            else
            {
                EscapeSlashBackslash(path.Substring(0, queryStringIndex), pathBuilder);
                pathBuilder.Append(path.Substring(queryStringIndex));
            }

            return base.Parse(model, serviceRoot, pathBuilder.ToString());
        }


        private void EscapeSlashBackslash(string uri, StringBuilder pathBuilder)
        {
            const string slash = "%2F";
            const string backSlash = "%5C";

            var startIndex = uri.IndexOf(EscapedQuote, StringComparison.OrdinalIgnoreCase);
            var endIndex = uri.IndexOf(EscapedQuote, startIndex + EscapedQuote.Length, StringComparison.OrdinalIgnoreCase);
            if (startIndex == -1 || endIndex == -1)
            {
                pathBuilder.Append(uri);
                return;
            }

            endIndex = endIndex + EscapedQuote.Length;
            pathBuilder.Append(uri.Substring(0, startIndex));
            for (var i = startIndex; i < endIndex; ++i)
            {
                switch (uri[i])
                {
                    case '/':
                        pathBuilder.Append(slash);
                        break;
                    case '\\':
                        pathBuilder.Append(backSlash);
                        break;
                    default:
                        pathBuilder.Append(uri[i]);
                        break;
                }
            }
            EscapeSlashBackslash(uri.Substring(endIndex), pathBuilder);
        }
    }
}
