describe("ApiTests", function () {
    it("should be able to create new element in db", function () {

        $data.service('http://localhost:64245/odata', function (contextFactory, contextType) {
        
            var ctx = contextFactory();

            ctx.Tags.add(new ctx.Tags.Tag({ Name: 'Tag from jasmine' }));
            ctx.saveChanges();

            //var tags = context.Tags.toArray().then(function (tags) {

            //    console.log(tags);
            //});


        });

        //dbContextFactory({})
        //    .onReady()
        //    .then(function () {
        //        expect(true).toEqual(true);
        //    });
    });

    //it("should be able to add new item", function () {
    //    var isNewRecord = false;

    //    //isNewRecord = true;

    //    expect(isNewRecord).toEqual(true);
    //});

    //it("should be able to add new item 2", function () {
    //    var isNewRecord = false;

    //    //isNewRecord = true;

    //    expect(isNewRecord).toEqual(false);
    //});

    //it("should be able to add new item 3", function () {
    //    var isNewRecord = false;

    //    //isNewRecord = true;

    //    expect(isNewRecord).toEqual(true);
    //});
});