function tagsTests() {
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
                        resolve();
                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    }

    this.addJob = function (job) {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;

            dbCtx.onReady(function () {
                dbCtx.Jobs.add(job);
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
        var dbCtx = exports.dbCtx;
        var testJob = new dbCtx.Jobs.Job();

        testJob.Name = "Job from Jasmine";
        testJob.Status = JobStatus.InProgress;

        return this.addJob(testJob);
    };

    this.removeJobById = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;

            dbCtx.onReady(function () {
                var testJob = new dbCtx.Jobs.Job();
                testJob.Name = "Job from Jasmine to Delete";
                dbCtx.Jobs.add(testJob);
                dbCtx.saveChanges().then(function () {
                    return dbCtx.Jobs.single(function (job) {
                        return job.Id == filterId;
                    }, { filterId: testJob.Id });
                }).then(function (job) {
                    dbCtx.Jobs.remove(job);
                    return dbCtx.saveChanges();
                }).then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };

    this.createScanVideosJob = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;

            dbCtx.onReady(function () {

                var testJob = new dbCtx.Jobs.Job();
                testJob.Name = "PFS.Server.Core.Jobs.ScanVideosJob, PFS.Server, Version=1.0.0.0";
                testJob.Args = JSON.stringify({
                    ContentSourceName: "Test Content Source",
                });
                testJob.Status = JobStatus.NotStarted;

                dbCtx.Jobs.add(testJob);
                dbCtx.saveChanges().then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
};

function contentSourcesTests() {
    this.init = function (apiUrl) {
        this.apiUrl = apiUrl;
    };

    this.readContentSources = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.ContentSources.toArray()
                    .then(function (jobs) {
                        resolve();
                    })
                    .catch(function (err) {
                        reject();
                    });
            });
        });
    };

    this.addNewContentSource = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {

                var entity = new dbCtx.ContentSources.ContentSource();
                entity.Name = "/DiskD";
                entity.DriveName = "D:\\";
                entity.Path = "";

                dbCtx.ContentSources.add(entity);
                dbCtx.saveChanges().then(function () {
                    resolve();
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };

    this.ensureNewContentSource = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {

                dbCtx.ContentSources.filter(function (w) {
                    return w.Name == "Test Content Source";
                }).toArray().then(function (results) {
                    if (results.length == 1) {
                        resolve();
                    }
                    else {
                        self.addNewContentSource().then(function () { resolve(); }).catch(function () { reject(); })
                    }
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
}