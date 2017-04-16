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

var apiUrl = "/odata";

describe("Tags tests", function () {
    var actions = new tagsTests();
    actions.init(apiUrl);

    describe("should be able to create new Tag", function () {
        should(actions, "createTag");
    });

    describe("should be able to read all tags", function () {
        should(actions, "readAllTags");
    });
});

describe("IO tests", function () {

    var actions = new ioTests();
    actions.init(apiUrl);

    describe("should be able to read drive 'C'", function () {
        should(actions, "readDriveC");
    });

    describe("should be able to read drives", function () {
        should(actions, "readDrives");
    });

    describe("should be able to read folders on drive C", function () {
        should(actions, "readFoldersOnC");
    });

    describe("should be able to read folders with 'a' symbol on server on drive C", function () {
        should(actions, "readFoldersWithAOnC");
    });

    describe("should be able to read first folder with 'a' symbol on server on drive C", function () {
        should(actions, "readFirstFolderWithAOnC");
    });
});


describe('Jobs tests', function(){
    var actions = new jobTests();
    actions.init(apiUrl);

    describe('should be able to read jobs', function(){
        should(actions, 'readJobs');
    });

    describe('should be able to add a new job with name only', function(){
        should(actions, 'addJobWithNameOnly');
    });

    //  describe('should be able to add a new job with name and status', function(){
    //     should(actions, 'addJobWithNameAndStatus');
    // });

});