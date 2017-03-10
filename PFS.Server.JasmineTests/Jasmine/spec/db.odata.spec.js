describe("MSSqlServer with Entity Framework api tests", function () {
    //var apiUrl = "http://localhost:64245/odata";
    var apiUrl = "http://localhost:5020/odata";

    function should(context, funcName) {
        var isDone = false;

        beforeEach(function (done) {
            context[funcName]().then(function () {
                isDone = true; done();
            }).catch(function () {
                isDone = false; done();
            });
        });

        it("Ok?", () => { expect(isDone).toEqual(true); });
    }

    var actionsToTest = new dbOdataActions();
    actionsToTest.init(apiUrl);

    describe("should be able to create new Tag", function () {
        should(actionsToTest, "createTag");
    });
    describe("should be able to read all tags", function () {
        should(actionsToTest, "readAllTags");
    });

    //function shouldCreateTag() {

    //    var isDone = false;
        
    //    beforeEach(function(done){
    //        createTag().then(function () {
    //            isDone = true; done();
    //        }).catch(function () {
    //            isDone = false; done();
    //        });
    //    });

    //    it("Ok?", () => { expect(isDone).toEqual(true); });
    //};

    //function shouldReadAllTags() {
    //    var isDone = false;

    //    beforeEach(function (done) {
    //        readAllTags().then(function () {
    //            isDone = true; done();
    //        }).catch(function () {
    //            isDone = false; done();
    //        });
    //    });

    //    it("Ok?", () => { expect(isDone).toEqual(true); });
    //}

});