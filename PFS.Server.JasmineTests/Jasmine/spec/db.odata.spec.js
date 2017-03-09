describe("MSSqlServer with Entity Framework api tests", function () {
    var apiUrl = "http://localhost:64245/odata";

    describe("should be able to create new Tag", shouldCreateTag);
    describe("should be able to read all tags", shouldReadAllTags);

    function shouldCreateTag() {

        var isDone = false;
        
        beforeEach(function(done){
            createTag().then(function () {
                isDone = true; done();
            }).catch(function () {
                isDone = false; done();
            });
        });

        it("Ok?", () => { expect(isDone).toEqual(true); });
    };

    function shouldReadAllTags() {
        var isDone = false;

        beforeEach(function (done) {
            readAllTags().then(function () {
                isDone = true; done();
            }).catch(function () {
                isDone = false; done();
            });
        });

        it("Ok?", () => { expect(isDone).toEqual(true); });
    }

    function readAllTags() {
        return new Promise(function (resolve, reject) {
            $data.service(apiUrl, function (contextFactory, contextType) {
                var ctx = contextFactory();
                resolve(ctx.Tags.toArray());
            });
        });
    }

    function createTag() {
        return new Promise(function (resolve, reject) {
            $data.service(apiUrl, function (contextFactory, contextType) {
                var ctx = contextFactory();
                ctx.Tags.add(new ctx.Tags.Tag({ Name: 'Tag from jasmine' }));

                resolve(ctx.saveChanges());
            });
        });        
    };

});