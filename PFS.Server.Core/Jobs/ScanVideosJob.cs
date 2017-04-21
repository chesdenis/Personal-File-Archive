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
using PFS.Server.Core.Enums;

namespace PFS.Server.Core.Jobs
{
    public class ScanVideosJob : ScanContentSourceJob
    {
        public override void DoScan()
        {
            string startPath = Path.Combine(ContentSource.DriveName, ContentSource.Path);
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
                //TODO: Log here 
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
                        LocationInfo = new VideoInfo.Location()
                        {
                            IOPath = s.DirectoryName,
                            RelativePath = GetUri(s.DirectoryName)
                        },
                        InstancesInfo = new VideoInfo.Instance[] 
                        {
                            new VideoInfo.Instance()
                            {
                                FileName = s.Name,
                                Order = 0,
                                TargetDevice = ViewOn.PC
                            }
                        }
                    }.AsJson()
                }).ToList();
            }
            catch (Exception ex)
            {
                //TODO: Log here 

                return new List<Video>();
            }
           
        }
    }
}
