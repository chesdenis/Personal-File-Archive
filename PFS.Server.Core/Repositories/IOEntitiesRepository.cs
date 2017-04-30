using PFS.Server.Core.Abstractions;
using PFS.Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.IO;
using PFS.Server.Core.ODataExtensions;

namespace PFS.Server.Core.Repositories
{
    public class IOEntitiesRepository
    {
        public PfsDrive GetDrive(string driveName)
        {
            driveName = driveName.ToStringNoQuotes();

            var allDrives = DriveInfo.GetDrives();

            var drive = allDrives
                .FirstOrDefault(f => f.Name.ToLowerInvariant() == $"{driveName.ToLowerInvariant()}:\\");

            if (drive == null)
            {
                drive = allDrives
                    .FirstOrDefault(f => f.VolumeLabel.ToLowerInvariant() == $"{driveName.ToLowerInvariant()}");
            }

            if (drive == null)
            {
                drive = allDrives
                   .FirstOrDefault(f => f.Name.ToLowerInvariant().StartsWith($"{driveName.ToLowerInvariant()}"));
            }

            if (drive == null) throw new Exception($"Drive {driveName} is not found on the server");

            return new PfsDrive() { Name = drive.VolumeLabel, Path = drive.RootDirectory.FullName };
        }

        public IEnumerable<PfsDrive> GetDrives()
        {
            var retVal = new List<PfsDrive>();
            var drives = DriveInfo.GetDrives();

            foreach (var drive in drives)
            {
                var pfsDrive = new PfsDrive();

                try
                {
                    pfsDrive.Name = drive.VolumeLabel;
                }
                catch (Exception ex)
                {
                    pfsDrive.Name = ex.Message;
                }

                try
                {
                    pfsDrive.Path = drive.RootDirectory.FullName;
                }
                catch
                {
                    continue;
                }

                retVal.Add(pfsDrive);
            }

            return retVal;
        }

        public PfsFolder GetFolder(string driveName, string folderRelativePath)
        {
            driveName = driveName.ToStringNoQuotes();
            folderRelativePath = folderRelativePath.ToStringNoQuotes();

            var drive = GetDrive(driveName);
            var fullFolderPath = Path.Combine(drive.Path, folderRelativePath);
            var folder = new DirectoryInfo(fullFolderPath);

            return new PfsFolder() { Name = folder.Name, Path = folder.FullName };
        }

        public IEnumerable<PfsFolder> GetFolders(string driveName, string folderRelativePath)
        {
            driveName = driveName.ToStringNoQuotes();
            folderRelativePath = folderRelativePath.ToStringNoQuotes();

            var drive = GetDrive(driveName);
            var fullFolderPath = Path.Combine(drive.Path, folderRelativePath);
            var folder = new DirectoryInfo(fullFolderPath);

            return folder.GetDirectories().Select(s => new PfsFolder() { Name = s.Name, Path = s.FullName });
        }

        public PfsFile GetFile(string driveName, string fileRelativePath)
        {
            driveName = driveName.ToStringNoQuotes();
            fileRelativePath = fileRelativePath.ToStringNoQuotes();

            var drive = GetDrive(driveName);
            var fullFilePath = Path.Combine(drive.Path, fileRelativePath);
            var file = new FileInfo(fullFilePath);

            return new PfsFile() { Name = file.Name, Path = file.FullName };
        }

        public IEnumerable<PfsFile> GetFiles(string driveName, string folderRelativePath)
        {
            driveName = driveName.ToStringNoQuotes();
            folderRelativePath = folderRelativePath.ToStringNoQuotes();

            var drive = GetDrive(driveName);
            var fullFolderPath = Path.Combine(drive.Path, folderRelativePath);
            var folder = new DirectoryInfo(fullFolderPath);

            return folder.GetFiles().Select(s => new PfsFile() { Name = s.Name, Path = s.FullName });
        }
    }
    
}
