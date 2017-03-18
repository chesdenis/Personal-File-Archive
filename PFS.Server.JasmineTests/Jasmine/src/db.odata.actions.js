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
        var apiUrl = this.apiUrl;

        return new Promise(function (resolve, reject) {
            $data.initService(apiUrl).then(function (ctx) {
                resolve(ctx.Tags.toArray());
            });
        });
    };
    this.createTag = function () {
        var apiUrl = this.apiUrl;

        return new Promise(function (resolve, reject) {
            $data.initService(apiUrl).then(function (ctx) {

                var seed = + new Date();
                var testEntityName = 'Tag from jasmine' + seed;

                ctx.Tags.add(new ctx.Tags.Tag({ Name: testEntityName }));

                ctx.saveChanges().then(function () {
                    return ctx.Tags.filter(function (tag) {
                        return tag.Name == this.NameFilter;
                    }, { NameFilter : testEntityName}).toArray();
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

    this.readFoldersOnServer = function () {
        var apiUrl = this.apiUrl;
        var startFolderPath = "c://";

        return new Promise(function (resolve, reject) {
            $data.initService(apiUrl).then(function (ctx) {
                return ctx;

                // ctx.Folders.GetFolders(encodeURIComponent(startFolderPath)).toArray(function(results){
                //     console.log(results);
                // });
                // ctx.Folders.GetFolders(encodeURIComponent(startFolderPath),function(results){
                //     console.log(results);
                //     // results.toArray()
                //     // .then(
                //     // function (folders) {
                //     //     if (folders.length) {
                //     //         resolve();
                //     //     }
                //     //     else {
                //     //         reject();
                //     //     }
                //     // })
                //     // .catch(function (err) {
                //     //     reject(err);
                //     // });
                // });                    
            }).then(function(ctx){
               return ctx.Folders.find(startFolderPath);
            }).then(function(startFolder){
               return startFolder.GetChildFolders().then(function(startFolderChildren){
                    resolve({"startFolder":startFolder, "startFolderChildren":startFolderChildren});
                }).catch(function(err){ reject(err); });
               
            }).then(function(startFolder, childrenFolders){
                console.log(startFolder);
                console.log(childrenFolders);
            });
            // .then(function(childFolders){
            //     console.log(childFolders);
            // });
        });
    }

    this.readFoldersWithAOnServer = function(){
        var apiUrl = this.apiUrl;
        var startFolderPath = "c://";

        return new Promise(function (resolve, reject) {
            $data.initService(apiUrl).then(function (ctx) {
                
                ctx.Folders.GetFolders(encodeURIComponent(startFolderPath))
                .filter(function(folder){return folder.Name.contains('a');})
                .toArray()
                .then(
                    function(folders){
                        if(folders.length){
                            resolve();
                        }
                        else{
                            reject();
                        } 
                    })
                    .catch(function(err){
                        reject(err);
                    });
            });
        });
    };

    this.readFirstFolderWithAOnServer = function(){
         var apiUrl = this.apiUrl;
         var startFolderPath = "c://";

         return new Promise(function (resolve, reject) {
            $data.service(apiUrl, function (contextFactory, contextType) {
                var ctx = contextFactory(); 

                ctx.Folders.GetFolders(encodeURIComponent(startFolderPath))
                .filter(function(folder){return folder.Name == 'a'})
                .top(1)
                .then(
                    function(folder){
                        resolve(); 
                    })
                    .catch(function(err){
                        reject(err);
                    });
            });
        });
    };


};