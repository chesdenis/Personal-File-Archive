﻿function tagsTests() {
    this.init = function (apiUrl) {
        this.apiUrl = apiUrl;
    };

    this.readAllTags = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;

            dbCtx.onReady(function () {
                resolve(dbCtx.Tags.toArray());
            });
        });
    };

    this.createTag = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;

            dbCtx.onReady(function () {
                var seed = +new Date();
                var testEntityName = 'Tag from jasmine' + seed;

                dbCtx.Tags.add(new dbCtx.Tags.Tag({ Name: testEntityName }));

                dbCtx.saveChanges().then(function () {
                    return dbCtx.Tags.filter(function (tag) {
                        return tag.Name == this.NameFilter;
                    }, { NameFilter: testEntityName }).toArray();
                }).then(function (tags) {
                    if (tags.length != 1) reject();
                    if (tags[0].Name != testEntityName) reject();

                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
}


function ioTests() {

    this.init = function (apiUrl) {
        this.apiUrl = apiUrl;
    };



    this.readDriveC = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetDrive('C')
                    .then(function (drive) {
                        if (drive.Path.length > 0) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    }

    this.readDrives = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetDrives().toArray()
                    .then(function (drives) {
                        drives.length > 0 ? resolve() : reject();
                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    };

    this.readFoldersOnC = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetFolders('C', '/').toArray()
                    .then(function (folders) {
                        folders.length > 0 ? resolve() : reject();
                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    };

    this.readFoldersWithAOnC = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetFolders('C', '/')
                    .filter(function (folder) { return folder.Name.contains('a'); })
                    .toArray()
                    .then(function (folders) {

                        if (folders.length == 0) reject();

                        for (var i = 0; i < folders.length; i++) {
                            if (folders[i].Name.indexOf('a') == -1) reject();
                        }

                        resolve();

                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    };

    this.readFirstFolderWithAOnC = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetFolders('C', '/')
                    .filter(function (folder) { return folder.Name.contains('a'); })
                    .take(1)
                    .forEach(function (folder) {
                        if (folder.Name.indexOf('a') == -1) reject();
                        resolve();
                    });
            });
        });
    };
};

function jobTests() {
    this.init = function (apiUrl) {
        this.apiUrl = apiUrl;
    };

    this.readJobs = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.Jobs.toArray()
                    .then(function (jobs) {
                        console.log(jobs);
                        resolve();
                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    }

    this.addJob = function (jobToAdd) {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;

            dbCtx.onReady(function () {
                // var testJob = new dbCtx.Jobs.Job({ Name: 'Job from Jasmine' });
                // testJob.Status = JobStatus.InProgress;
                dbCtx.Jobs.add(jobToAdd);

                dbCtx.saveChanges().then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
            });

        });
    };
    this.addJobWithNameOnly = function () {
        var dbCtx = exports.dbCtx;

        var testJob = new dbCtx.Jobs.Job();
        testJob.Name = "Job from Jasmine";

        return this.addJob(testJob);

    };
    this.addJobWithNameAndStatus = function () {

    };
};