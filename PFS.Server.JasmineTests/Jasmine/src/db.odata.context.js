﻿var exports = {};

exports.$data = $data;

var types = {};

types["PFS.Server.Core.Entities.Tag"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.Tag", {
    Id: {
        "type": "Edm.Int32",
        "nullable": false,
        "required": true,
        "key": true
    },
    Name: {
        "type": "Edm.String"
    },
    MainParentId: {
        "type": "Edm.Int32",
        "nullable": false,
        "required": true
    },
    SecondaryParentId: {
        "type": "Edm.Int32",
        "nullable": false,
        "required": true
    }
});

types["PFS.Server.Core.Entities.PfsFile"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFile", {
    Path: {
        "type": "Edm.String",
        "nullable": false,
        "required": true,
        "key": true
    },
    Name: {
        "type": "Edm.String"
    }
});

types["PFS.Server.Core.Entities.PfsFolder"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFolder", {
    Path: {
        "type": "Edm.String",
        "nullable": false,
        "required": true,
        "key": true
    },
    Name: {
        "type": "Edm.String"
    },
    GetChildFolders: {
        "type": "$data.ServiceFunction",
        "namespace": "Default",
        "returnType": "System.Linq.IQueryable_1OfPfsFolder",
        "params": []
    },
    GetChildFiles: {
        "type": "$data.ServiceFunction",
        "namespace": "Default",
        "returnType": "System.Linq.IQueryable_1OfPfsFile",
        "params": []
    }
});

types["System.Linq.IQueryable_1OfPfsFolder"] = $data("$data.Entity").extend("System.Linq.IQueryable_1OfPfsFolder", null);

types["System.Linq.IQueryable_1OfPfsFile"] = $data("$data.Entity").extend("System.Linq.IQueryable_1OfPfsFile", null);

exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
    Tags: {
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.Tag"
    },
    Files: {
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.PfsFile"
    },
    Folders: {
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.PfsFolder"
    }
});

exports.PFS = {
    "Server": {
        "Core": {
            "Entities": {
                "Tag": types["PFS.Server.Core.Entities.Tag"],
                "PfsFile": types["PFS.Server.Core.Entities.PfsFile"],
                "PfsFolder": types["PFS.Server.Core.Entities.PfsFolder"]
            }
        }
    }
};

exports.System = {
    "Linq": {
        "IQueryable_1OfPfsFolder": types["System.Linq.IQueryable_1OfPfsFolder"],
        "IQueryable_1OfPfsFile": types["System.Linq.IQueryable_1OfPfsFile"]
    }
};

exports.Default = {
    "Container": types["Default.Container"]
};

var ctxType = exports.type;
exports.factory = function (config) {
    if (ctxType) {
        var cfg = $data.typeSystem.extend({
            name: "oData",
            oDataServiceHost: "http://localhost:5000/odata",
            withCredentials: false,
            maxDataServiceVersion: "4.0"
        }, config);
        return new ctxType(cfg);
    } else {
        return null;
    }
};

exports["dbCtx"] = exports.factory();


//var types = {};


//types.Tag = $data.Entity.extend("Tag", {
//    Id: { type: "Edm.Int32", nullable:false, key: true, required: true },
//    Name: { type: "Edm.String"},
//    MainParentId: { type: "Edm.Int32" },
//    SecondaryParentId: { type: "Edm.Int32" }
//});

//types.PfsFile = $data.Entity.extend("PfsFile", {
//    Path: { type: "Edm.String", nullable: false, key: true, required: true, },
//    Name: { type: "Edm.String" }
//});

//types.PfsFolder = $data.Entity.extend("PfsFolder", {
//    Path: { type: "Edm.String",nullable: false, key: true, required: true  },
//    Name: { type: "Edm.String" },
//    GetChildFolders: {
//        type: $data.ServiceFunction, namespace: "Default", returnType: $data.Queryable, params: []
//    },
//    GetChildFiles: {
//        type: $data.ServiceFunction, namespace: "Default", returnType: $data.Queryable, params: []
//    }
//});


//var PfsDatabase = $data.EntityContext.extend("PfsDatabase", {
//    Tags: { type: $data.EntitySet, elementType: "Tag" },
//    Files: { type: $data.EntitySet, elementType: "PfsFile" },
//    Folders: { type: $data.EntitySet, elementType: "PfsFolder" },
//});

//var Todo = $data.Entity.extend("Todo", {
//    Id: { type: "int", key: true, computed: true },
//    Task: { type: String, required: true, maxLength: 200 },
//    DueDate: { type: Date },
//    Completed: { type: Boolean },
//    Person: { type: "Person", required: true, inverseProperty: "Todos" }
//});

//var Person = $data.Entity.extend("Person", {
//    Id: { type: "int", key: true, computed: true },
//    Name: { type: String, required: true, maxLength: 200 },
//    Todos: { type: Array, elementType: Todo, inverseProperty: "Person" }
//});

//$data.EntityContext.extend("TodoDatabase", {
//    Todos: { type: $data.EntitySet, elementType: Todo },
//    People: { type: $data.EntitySet, elementType: Person }
//});

//var Location = $data.Entity.extend("Location", {
//    City: { type: String },
//    Country: { type: String }
//});
//$data.Entity.extend("Todo", {
//    Id: { type: "int", key: true, computed: true },
//    Task: { type: String, required: true, maxLength: 200 },
//    DueDate: { type: Date },
//    Completed: { type: Boolean },
//    Location: { type: Location }
//});

//$data.EntityContext.extend("TodoDatabase", {
//    Todos: { type: $data.EntitySet, elementType: Todo }
//});

//var todoDB = new TodoDatabase('http://mysite/myapi');

//todoDB.onReady(function () {
//    //Work with todoDB now
//});

////Create
//var tasks = todoDB.Todos.addMany([
//    { Task: 'Step0: Get this this list', Completed: true },
//    { Task: 'Step1: Define your data model' },
//    { Task: 'Step2: Initialize data storage' }
//]);
//todoDB.saveChanges(function () {
//    tasks.forEach(function (todo) { alert(todo.Id) });
//});

////Create related data
//todoDB.Todos.add({ 
//    Task: "Your task", 
//    Person: new Person({Name: 'Peter'});
//});
//todoDB.saveChanges();

////Retrieve the existing item by Id and attach to the context to track changes
//var todo = todoDB.Todos.attachOrGet({ Id: 1 });
//todo.Completed = true;
//todoDB.saveChanges();


////Remove with query
//todoDB.Todos
//        .filter("it.Completed == true")
//        .removeAll(function () {
//            alert("items removed");
//        });

//dbcontext
//   .Products
//   .filter(function (p) {
//       return p.Category.ID == 42
//   }).skip(10).take(5)
//   .toArray()

//var product = new Northwind.Product({
//    ProductName: 'Lady Gray Tea',
//    Cateogory: new Northwind.Category('Teas')
//});
//Northwind.Products.add(product);
//Northwind.saveChanges();