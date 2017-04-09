function dbOdataActions() {
    this.init = function (apiUrl) {
        this.apiUrl = apiUrl;
    };
    this.should = function (funcToCheck) {
        var isDone = false;

        beforeEach(function (done) {
            funcToCheck().then(function () {
                isDone = true; done();
            }).catch(function () {
                isDone = false; done();
            });
        });

        it("Ok?", () => { expect(isDone).toEqual(true); });
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
                });;
            });
        });
    };

    this.readDriveC = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetDrive('C')
                    .then(function (drive) {
                        console.log(drive);
                        resolve();
                    })
                    .catch(function (err) {
                        console.log(err);
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
                        console.log(drives);
                        resolve();
                    })
                    .catch(function (err) {
                        console.log(err);
                        reject();
                    });
            });
        });
    };

    this.readFoldersOnC = function () {
        return new Promise(function (resolve, reject) {
            var dbCtx = exports.dbCtx;
            dbCtx.onReady(function () {
                dbCtx.IOEntities.GetFolders('C','/').toArray()
                    .then(function (folders) {
                        console.log(folders);
                        resolve();
                    })
                    .catch(function (err) {
                        console.log(err);
                        reject();
                    });
            });
        });
    };

    //this.readFoldersOnServer = function () {
    //    var startFolderPath = "dc-angular";

    //    return new Promise(function (resolve, reject) {
    //        var dbCtx = exports.dbCtx;
    //        dbCtx.onReady(function () {

    //            dbCtx.Folders.find(startFolderPath).then(function (folder) {
    //                return folder.GetChildFolders();
    //            }).then(function (subFolders) {
    //                if (subFolders.length == 0) reject();
    //                console.log(subFolders);
    //                resolve();
    //            }).catch(function (err)
    //            {
    //                reject(err);
    //            });

    //            //dbCtx.Folders.find(startFolderPath, function (startFolder) {
    //            //    console.log(startFolder);
    //            //});

    //            //dbCtx.Folders.find(startFolderPath).toArray().then(function (startFolder) {
    //            //    console.log(startFolder);
    //            //    return startFolder.GetChildFolders();
    //            //}).then(function (childFolders) {
    //            //    resolve(childFolders);
    //            //}).catch(function (err)
    //            //{
    //            //    reject(err);
    //            //});;

    //        });
    //    });
    //        //$data.initService(apiUrl).then(function (ctx) {
    //        //    return ctx;
    //        //}).then(function (ctx) {
    //        //    return ctx.Folders.find(startFolderPath);
    //        //}).then(function (startFolder) {
    //        //    console.log(startFolder);
    //        //    startFolder.GetChildFolders(function(childFolders){
    //        //        console.log(childFolders);
    //        //    });
    //        //});
    //        //    return startFolder.GetChildFolders().then(function(startFolderChildren){
    //        //         resolve({"startFolder":startFolder, "startFolderChildren":startFolderChildren});
    //        //     }).catch(function(err){ reject(err); });

    //        // }).then(function(startFolder, childrenFolders){
    //        //     console.log(startFolder);
    //        //     console.log(childrenFolders);
    //        // });
    //        // .then(function(childFolders){
    //        //     console.log(childFolders);
    //        // });
    //    //});
    //}

    //this.readFoldersWithAOnServer = function(){
    //    var apiUrl = this.apiUrl;
    //    var startFolderPath = "c://";

    //    return new Promise(function (resolve, reject) {
    //        $data.initService(apiUrl).then(function (ctx) {
                
    //            ctx.Folders.GetFolders(encodeURIComponent(startFolderPath))
    //            .filter(function(folder){return folder.Name.contains('a');})
    //            .toArray()
    //            .then(
    //                function(folders){
    //                    if(folders.length){
    //                        resolve();
    //                    }
    //                    else{
    //                        reject();
    //                    } 
    //                })
    //                .catch(function(err){
    //                    reject(err);
    //                });
    //        });
    //    });
    //};

    //this.readFirstFolderWithAOnServer = function(){
    //     var apiUrl = this.apiUrl;
    //     var startFolderPath = "c://";

    //     return new Promise(function (resolve, reject) {
    //        $data.service(apiUrl, function (contextFactory, contextType) {
    //            var ctx = contextFactory(); 

    //            ctx.Folders.GetFolders(encodeURIComponent(startFolderPath))
    //            .filter(function(folder){return folder.Name == 'a'})
    //            .top(1)
    //            .then(
    //                function(folder){
    //                    resolve(); 
    //                })
    //                .catch(function(err){
    //                    reject(err);
    //                });
    //        });
    //    });
    //};


};