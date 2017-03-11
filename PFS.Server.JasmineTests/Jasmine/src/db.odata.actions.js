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
            $data.service(apiUrl, function (contextFactory, contextType) {
                var ctx = contextFactory();
                resolve(ctx.Tags.toArray());
            });
        });
    };
    this.createTag = function () {
        var apiUrl = this.apiUrl;

        return new Promise(function (resolve, reject) {
            $data.service(apiUrl, function (contextFactory, contextType) {

                var seed = + new Date();
                var testEntityName = 'Tag from jasmine' + seed;

                var ctx = contextFactory();
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


};