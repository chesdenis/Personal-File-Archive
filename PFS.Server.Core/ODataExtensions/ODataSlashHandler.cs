#if AnyOS
using Microsoft.AspNetCore.OData.Routing;
#endif
#if WinOnly
using System.Web.OData.Routing;
#endif
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

        public const string Slash = "__2F";
        public const string BackSlash = "__5C";

#if AnyOS
        public ODataSlashHandler(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }
        
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
#endif
#if WinOnly
        public override ODataPath Parse(string serviceRoot, string odataPath, IServiceProvider requestContainer)
        {
            if (!odataPath.Contains(EscapedQuote))
            {
                return base.Parse(serviceRoot, odataPath, requestContainer);
            }

            var pathBuilder = new StringBuilder();
            var queryStringIndex = odataPath.IndexOf('?');
            if (queryStringIndex == -1)
            {
                EscapeSlashBackslash(odataPath, pathBuilder);
            }
            else
            {
                EscapeSlashBackslash(odataPath.Substring(0, queryStringIndex), pathBuilder);
                pathBuilder.Append(odataPath.Substring(queryStringIndex));
            }

            return base.Parse(serviceRoot, pathBuilder.ToString(), requestContainer);
        }
#endif

        private void EscapeSlashBackslash(string uri, StringBuilder pathBuilder)
        {
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
                        pathBuilder.Append(Slash);
                        break;
                    case '\\':
                        pathBuilder.Append(BackSlash);
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
