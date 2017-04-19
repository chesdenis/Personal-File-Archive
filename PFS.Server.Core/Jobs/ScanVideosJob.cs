using System;
using System.Collections.Generic;
using System.Text;
using PFS.Server.Core.DbContexts;
using PFS.Server.Core.Entities;
using System.Linq;
using System.Runtime.Serialization;
using System.IO;
using PFS.Server.Core.Dto;
using PFS.Server.Core.Abstractions;

namespace PFS.Server.Core.Jobs
{
    public class ScanVideosJob : ScanContentSourceJob
    {
        public override void DoScan()
        {
            var contentSource = DbCtx.ContentSources.FirstOrDefault(f => f.Name == JobArgs.ContentSourceName);
            if (contentSource == null) throw new ArgumentNullException($"Content source with name {JobArgs.ContentSourceName} not found.");
            
            string startPath = Path.Combine(contentSource.DriveName, contentSource.Path);
            var startDir = new DirectoryInfo(startPath);

            if (!startDir.Exists) throw new ArgumentException($"Directory {startPath} not found.");

            var videos = ScanFolders(startDir.FullName).ToArray();

            Console.WriteLine($"Found {videos.Length} files");

            foreach (var video in videos)
            {
                DbCtx.Videos.Add(video);
                DbCtx.SaveChanges();
            }   
        }

        private IEnumerable<Video> ScanFolders(string startDir)
        {
            var retVal = new List<Video>();

            try
            {
                Console.WriteLine($"Scaning: {startDir}");

                var currentDir = new DirectoryInfo(startDir);
                if (!currentDir.Exists) return retVal;

                retVal.AddRange(ScanFiles(currentDir));

                var subDirs = currentDir.GetDirectories();

                foreach (var dir in subDirs)
                {
                    retVal.AddRange(ScanFolders(dir.FullName));
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return retVal;
        }

        private IEnumerable<Video> ScanFiles(DirectoryInfo startDir)
        {
            try
            {
                return startDir.GetFiles("*.mp4").Select(s => new Video()
                {
                    Name = s.Name,
                    Data = new VideoInfo()
                    {
                        Instances = new VideoInfo.VideoInstance[]
                        {
                            new VideoInfo.VideoInstance()
                            {
                                Path = s.FullName,
                                TargetDevice = ViewOn.PC
                            }
                        }
                    }.AsJson()
                }).ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);

                return new List<Video>();
            }
           
        }
    }
}
