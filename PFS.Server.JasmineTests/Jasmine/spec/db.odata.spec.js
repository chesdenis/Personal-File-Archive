describe("MSSqlServer with Entity Framework api tests", function () {
    var apiUrl = "/odata";
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

    describe("should be able to read drive 'C'", function () {
        should(actionsToTest, "readDriveC");
    });

    describe("should be able to read drives", function () {
        should(actionsToTest, "readDrives");
    });

    describe("should be able to read folders on drive C", function () {
        should(actionsToTest, "readFoldersOnC");
    });
    //describe("should read folder on server in drive C:\\", function(){
    //    should(actionsToTest, "readFoldersOnServer");
    //});
    // describe("should read folders with 'a' symbol on server in drive C:\\", function(){
    //     should(actionsToTest, "readFoldersWithAOnServer");
    // });
    // describe("should read first folder with 'a' symbol on server in drive C:\\", function(){
    //     should(actionsToTest, "readFirstFolderWithAOnServer");
    // });
});