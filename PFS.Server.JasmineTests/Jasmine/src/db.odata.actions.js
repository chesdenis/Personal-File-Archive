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
                var ctx = contextFactory();
                ctx.Tags.add(new ctx.Tags.Tag({ Name: 'Tag from jasmine' }));

                resolve(ctx.saveChanges());
            });
        });
    };


};