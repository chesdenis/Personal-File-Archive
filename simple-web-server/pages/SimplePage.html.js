var app = angular.module("SimplePageModuleApp", []);

app.factory("SimpleService", function ($http, $q) {
    return {
        getData: function (dataToServer) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:3000/samplePost',

                data: JSON.stringify(dataToServer)
            })

                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    }
})

angular.module("SimplePageModuleApp").controller("ListOfProductsController", function (SimpleService) {

    this.ListTitle = "Список продуктов";
    this.ProductList = [
        {
            ProductName: "Apple",
        }
    ];

    this.NewProductTitle = "";

    this.AddNewProduct = function () {
        this.ProductList.push({
            ProductName: this.NewProductTitle
        });
    }

    this.Mode = "";
    this.TryIf = { visible: false };
    this.TryShowHide = { visible: true };


    this.SendDataToServer = function () {
        var promiseObj = SimpleService.getData(this.SimpleObjectForRequest);
        var contextController = this;
        promiseObj.then(function (value) {
            contextController.SimpleObjectForRequest = value;

            console.log(contextController.SimpleObjectForRequest.message);
            console.log(contextController.SimpleObjectForRequest.count);
        });
    };

    this.SimpleObjectForRequest = {
        "message": "Requst to server",
        "count": 0
    };

});