using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Newtonsoft.Json.Linq;
using Owin;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace PFS.Server.Extensions
{
    public static class StaticFoldersExtensions
    {
        public static IAppBuilder UsePfsStaticFolders(this IAppBuilder app)
        {
            string root = AppDomain.CurrentDomain.BaseDirectory;
            string pathToConfig = Path.Combine(root, "staticfolders.json");

            var configAsFile = new FileInfo(pathToConfig);
            if (!configAsFile.Exists)
                throw new Exception($"staticfolders.json is not exist in {root}");

            var pfsStaticFoldersAsObject = JObject.Parse(File.ReadAllText(pathToConfig));
            var mappingsSection = pfsStaticFoldersAsObject["StaticFoldersMappings"];
            var children = mappingsSection.Children();
            foreach (JProperty child in children)
            {
                var folderTokenName = child.Name;
                var folderTokenValue = mappingsSection[folderTokenName].Value<string>();

                if (new DirectoryInfo(folderTokenValue).Exists == false) continue;

                var physicalFileSystem = new PhysicalFileSystem(folderTokenValue);
                var options = new FileServerOptions
                {
                    RequestPath = new Microsoft.Owin.PathString(folderTokenName),
                    EnableDefaultFiles = true,
                    FileSystem = physicalFileSystem
                };
                options.StaticFileOptions.FileSystem = physicalFileSystem;
                options.StaticFileOptions.ServeUnknownFileTypes = false;
                app.UseFileServer(options);
            }

            return app;
        }
    }
}