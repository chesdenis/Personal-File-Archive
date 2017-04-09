var exports = {};

var types = {};

types["PFS.Server.Core.Entities.PfsDrive"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsDrive", {
    Name: {
        "type": "Edm.String"
    },
    Path: {
        "type": "Edm.String"
    }
});

types["PFS.Server.Core.Entities.PfsFolder"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFolder", {
    Name: {
        "type": "Edm.String"
    },
    Path: {
        "type": "Edm.String"
    }
});

types["PFS.Server.Core.Entities.PfsFile"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFile", {
    Name: {
        "type": "Edm.String"
    },
    Path: {
        "type": "Edm.String"
    }
});

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

types["PFS.Server.Core.Entities.IOPfsEntity"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.IOPfsEntity", {
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

exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
    Tags: {
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.Tag"
    },
    IOEntities: {
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.IOPfsEntity",
        "actions": {
            "GetDrive": {
                "type": "$data.ServiceFunction",
                "namespace": "Default",
                "returnType": "PFS.Server.Core.Entities.PfsDrive",
                "params": [{
                    "name": "DriveName",
                    "type": "Edm.String"
                }]
            },
            "GetDrives": {
                "type": "$data.ServiceFunction",
                "namespace": "Default",
                "returnType": "$data.Queryable",
                "params": [],
                "elementType": "PFS.Server.Core.Entities.PfsDrive"
            },
            "GetFolder": {
                "type": "$data.ServiceFunction",
                "namespace": "Default",
                "returnType": "PFS.Server.Core.Entities.PfsFolder",
                "params": [{
                    "name": "DriveName",
                    "type": "Edm.String"
                }, {
                    "name": "FolderRelativePath",
                    "type": "Edm.String"
                }]
            },
            "GetFolders": {
                "type": "$data.ServiceFunction",
                "namespace": "Default",
                "returnType": "$data.Queryable",
                "elementType": "PFS.Server.Core.Entities.PfsFolder",
                "params": [{
                    "name": "DriveName",
                    "type": "Edm.String"
                }, {
                    "name": "FolderRelativePath",
                    "type": "Edm.String"
                }]
            },
            "GetFile": {
                "type": "$data.ServiceFunction",
                "namespace": "Default",
                "returnType": "PFS.Server.Core.Entities.PfsFile",
                "params": [{
                    "name": "DriveName",
                    "type": "Edm.String"
                }, {
                    "name": "FileRelativePath",
                    "type": "Edm.String"
                }]
            },
            "GetFiles": {
                "type": "$data.ServiceFunction",
                "namespace": "Default",
                "returnType": "$data.Queryable",
                "elementType": "PFS.Server.Core.Entities.PfsFile",
                "params": [{
                    "name": "DriveName",
                    "type": "Edm.String"
                }, {
                    "name": "FolderRelativePath",
                    "type": "Edm.String"
                }]
            }
        }
    }
});

//exports.PFS = {
//    "Server": {
//        "Core": {
//            "Entities": {
//                "PfsDrive": types["PFS.Server.Core.Entities.PfsDrive"],
//                "PfsFolder": types["PFS.Server.Core.Entities.PfsFolder"],
//                "PfsFile": types["PFS.Server.Core.Entities.PfsFile"],
//                "Tag": types["PFS.Server.Core.Entities.Tag"],
//                "IOPfsEntity": types["PFS.Server.Core.Entities.IOPfsEntity"]
//            }
//        }
//    }
//};

//exports.System = {
//    "Linq": {
//        "IQueryable_1OfPfsDrive": types["System.Linq.IQueryable_1OfPfsDrive"],
//        "IQueryable_1OfPfsFolder": types["System.Linq.IQueryable_1OfPfsFolder"],
//        "IQueryable_1OfPfsFile": types["System.Linq.IQueryable_1OfPfsFile"]
//    }
//};

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

//types["PFS.Server.Core.Entities.PfsDrive"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsDrive", {
//    Name: {
//        "type": "Edm.String"
//    },
//    Path: {
//        "type": "Edm.String"
//    }
//});

//types["PFS.Server.Core.Entities.PfsFolder"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFolder", {
//    Name: {
//        "type": "Edm.String"
//    },
//    Path: {
//        "type": "Edm.String"
//    }
//});

//types["PFS.Server.Core.Entities.PfsFile"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFile", {
//    Name: {
//        "type": "Edm.String"
//    },
//    Path: {
//        "type": "Edm.String"
//    }
//});

//types["PFS.Server.Core.Entities.Tag"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.Tag", {
//    Id: {
//        "type": "Edm.Int32",
//        "nullable": false,
//        "required": true,
//        "key": true
//    },
//    Name: {
//        "type": "Edm.String"
//    },
//    MainParentId: {
//        "type": "Edm.Int32",
//        "nullable": false,
//        "required": true
//    },
//    SecondaryParentId: {
//        "type": "Edm.Int32",
//        "nullable": false,
//        "required": true
//    }
//});

//types["PFS.Server.Core.Entities.IOPfsEntity"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.IOPfsEntity", {
//    Path: {
//        "type": "Edm.String",
//        "nullable": false,
//        "required": true,
//        "key": true
//    },
//    Name: {
//        "type": "Edm.String"
//    }
//});

//types["System.Collections.Generic.IEnumerable_1OfPfsDrive"] = $data("$data.Entity").extend("System.Collections.Generic.IEnumerable_1OfPfsDrive", null);

//types["System.Collections.Generic.IEnumerable_1OfPfsFolder"] = $data("$data.Entity").extend("System.Collections.Generic.IEnumerable_1OfPfsFolder", null);

//types["System.Collections.Generic.IEnumerable_1OfPfsFile"] = $data("$data.Entity").extend("System.Collections.Generic.IEnumerable_1OfPfsFile", null);

//exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
//    Tags: {
//        "type": "$data.EntitySet",
//        "elementType": "PFS.Server.Core.Entities.Tag"
//    },
//    IOEntities: {
//        "type": "$data.EntitySet",
//        "elementType": "PFS.Server.Core.Entities.IOPfsEntity",
//        "actions": {
//            "GetDrive": {
//                "type": "$data.ServiceFunction",
//                "namespace": "Default",
//                "returnType": "PFS.Server.Core.Entities.PfsDrive",
//                "params": [{
//                    "name": "DriveName",
//                    "type": "Edm.String"
//                }]
//            },
//            "GetDrives": {
//                "type": "$data.ServiceFunction",
//                "namespace": "Default",
//                "returnType": "System.Collections.Generic.IEnumerable_1OfPfsDrive",
//                "params": []
//            },
//            "GetFolder": {
//                "type": "$data.ServiceFunction",
//                "namespace": "Default",
//                "returnType": "PFS.Server.Core.Entities.PfsFolder",
//                "params": [{
//                    "name": "DriveName",
//                    "type": "Edm.String"
//                }, {
//                    "name": "FolderRelativePath",
//                    "type": "Edm.String"
//                }]
//            },
//            "GetFolders": {
//                "type": "$data.ServiceFunction",
//                "namespace": "Default",
//                "returnType": "System.Collections.Generic.IEnumerable_1OfPfsFolder",
//                "params": [{
//                    "name": "DriveName",
//                    "type": "Edm.String"
//                }, {
//                    "name": "FolderRelativePath",
//                    "type": "Edm.String"
//                }]
//            },
//            "GetFile": {
//                "type": "$data.ServiceFunction",
//                "namespace": "Default",
//                "returnType": "PFS.Server.Core.Entities.PfsFile",
//                "params": [{
//                    "name": "DriveName",
//                    "type": "Edm.String"
//                }, {
//                    "name": "FileRelativePath",
//                    "type": "Edm.String"
//                }]
//            },
//            "GetFiles": {
//                "type": "$data.ServiceFunction",
//                "namespace": "Default",
//                "returnType": "System.Collections.Generic.IEnumerable_1OfPfsFile",
//                "params": [{
//                    "name": "DriveName",
//                    "type": "Edm.String"
//                }, {
//                    "name": "FolderRelativePath",
//                    "type": "Edm.String"
//                }]
//            }
//        }
//    }
//});

//exports.PFS = {
//    "Server": {
//        "Core": {
//            "Entities": {
//                "PfsDrive": types["PFS.Server.Core.Entities.PfsDrive"],
//                "PfsFolder": types["PFS.Server.Core.Entities.PfsFolder"],
//                "PfsFile": types["PFS.Server.Core.Entities.PfsFile"],
//                "Tag": types["PFS.Server.Core.Entities.Tag"],
//                "IOPfsEntity": types["PFS.Server.Core.Entities.IOPfsEntity"]
//            }
//        }
//    }
//};

//exports.System = {
//    "Collections": {
//        "Generic": {
//            "IEnumerable_1OfPfsDrive": types["System.Collections.Generic.IEnumerable_1OfPfsDrive"],
//            "IEnumerable_1OfPfsFolder": types["System.Collections.Generic.IEnumerable_1OfPfsFolder"],
//            "IEnumerable_1OfPfsFile": types["System.Collections.Generic.IEnumerable_1OfPfsFile"]
//        }
//    }
//};

//exports.Default = {
//    "Container": types["Default.Container"]
//};

//var ctxType = exports.type;
//exports.factory = function (config) {
//    if (ctxType) {
//        var cfg = $data.typeSystem.extend({
//            name: "oData",
//            oDataServiceHost: "http://localhost:5000/odata",
//            withCredentials: false,
//            maxDataServiceVersion: "4.0"
//        }, config);
//        return new ctxType(cfg);
//    } else {
//        return null;
//    }
//};

//exports["dbCtx"] = exports.factory();












//var exports = {};

//exports.$data = $data;

//var types = {};

//types["PFS.Server.Core.Entities.Tag"] = $data("$data.Entity")
//    .extend("PFS.Server.Core.Entities.Tag", {
//    Id: {
//        "type": "Edm.Int32",
//        "nullable": false,
//        "required": true,
//        "key": true
//    },
//    Name: {
//        "type": "Edm.String"
//    },
//    MainParentId: {
//        "type": "Edm.Int32",
//        "nullable": false,
//        "required": true
//    },
//    SecondaryParentId: {
//        "type": "Edm.Int32",
//        "nullable": false,
//        "required": true
//    }
//});

//types["PFS.Server.Core.Entities.PfsDrive"] = $data("$data.Entity")
//.extend("Server.Core.Entities.PfsDrive", {
//    Path: {
//        "type": "Edm.String",
//        "nullable": false,
//        "required": true,
//        "key": true
//    },
//    Name: {
//        "type": "Edm.String"
//    }
//});

////types["PFS.Server.Core.Entities.PfsDrivesQueryable"] = $data("$data.Queryable")
////    .extend("PFS.Server.Core.Entities.PfsDrivesQueryable");

//types["PFS.Server.Core.Entities.IOPfsEntity"] = $data("$data.Entity")
//.extend("PFS.Server.Core.Entities.IOPfsEntity", {
//    Path: {
//        "type": "Edm.String",
//        "nullable": false,
//        "required": true,
//        "key": true
//    },
//    Name: {
//        "type": "Edm.String"
//    },
//    GetDrive: {
//        "type": "$data.ServiceFunction",
//        "namespace": "Default",
//        "returnType": "PFS.Server.Core.Entities.PfsDrive",
//        "params": []
//    },
//    GetDrives: {
//        "type": "$data.ServiceFunction",
//        "namespace": "Default",
//        "returnType": "$data.Queryable",
//        "elementType": "PFS.Server.Core.Entities.PfsDrive",
//        "params":[]
//    }
//});



////types["PFS.Server.Core.Entities.PfsFile"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFile", {
////    Path: {
////        "type": "Edm.String",
////        "nullable": false,
////        "required": true,
////        "key": true
////    },
////    Name: {
////        "type": "Edm.String"
////    }
////});

////types["PFS.Server.Core.Entities.PfsFolder"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.PfsFolder", {
////    Path: {
////        "type": "Edm.String",
////        "nullable": false,
////        "required": true,
////        "key": true
////    },
////    Name: {
////        "type": "Edm.String"
////    },
////    //GetChildFolders: {
////    //    "type": "$data.ServiceFunction",
////    //    "namespace": "Default",
////    //    "returnType": "System.Linq.IQueryable_1OfPfsFolder",
////    //    "params": []
////    //},
////    //GetChildFiles: {
////    //    "type": "$data.ServiceFunction",
////    //    "namespace": "Default",
////    //    "returnType": "System.Linq.IQueryable_1OfPfsFile",
////    //    "params": []
////    //}
////});

//exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
//    Tags: {
//        "type": "$data.EntitySet",
//        "elementType": "PFS.Server.Core.Entities.Tag"
//    },
//    IOEntities: {
//        "type": "$data.EntitySet",
//        "elementType": "PFS.Server.Core.Entities.IOPfsEntity"
//    }
//});

////exports.PFS = {
////    "Server": {
////        "Core": {
////            "Entities": {
////                "Tag": types["PFS.Server.Core.Entities.Tag"],
////            }
////        }
////    }
////};

////exports.System = {
////    "Linq": {
////        "IQueryable_1OfPfsFolder": types["System.Linq.IQueryable_1OfPfsFolder"],
////        "IQueryable_1OfPfsFile": types["System.Linq.IQueryable_1OfPfsFile"]
////    }
////};

//exports.Default = {
//    "Container": types["Default.Container"]
//};

//var ctxType = exports.type;
//exports.factory = function (config) {
//    if (ctxType) {
//        var cfg = $data.typeSystem.extend({
//            name: "oData",
//            oDataServiceHost: "http://localhost:5000/odata",
//            withCredentials: false,
//            maxDataServiceVersion: "4.0"
//        }, config);
//        return new ctxType(cfg);
//    } else {
//        return null;
//    }
//};

//exports["dbCtx"] = exports.factory();


////var types = {};


////types.Tag = $data.Entity.extend("Tag", {
////    Id: { type: "Edm.Int32", nullable:false, key: true, required: true },
////    Name: { type: "Edm.String"},
////    MainParentId: { type: "Edm.Int32" },
////    SecondaryParentId: { type: "Edm.Int32" }
////});

////types.PfsFile = $data.Entity.extend("PfsFile", {
////    Path: { type: "Edm.String", nullable: false, key: true, required: true, },
////    Name: { type: "Edm.String" }
////});

////types.PfsFolder = $data.Entity.extend("PfsFolder", {
////    Path: { type: "Edm.String",nullable: false, key: true, required: true  },
////    Name: { type: "Edm.String" },
////    GetChildFolders: {
////        type: $data.ServiceFunction, namespace: "Default", returnType: $data.Queryable, params: []
////    },
////    GetChildFiles: {
////        type: $data.ServiceFunction, namespace: "Default", returnType: $data.Queryable, params: []
////    }
////});


////var PfsDatabase = $data.EntityContext.extend("PfsDatabase", {
////    Tags: { type: $data.EntitySet, elementType: "Tag" },
////    Files: { type: $data.EntitySet, elementType: "PfsFile" },
////    Folders: { type: $data.EntitySet, elementType: "PfsFolder" },
////});

////var Todo = $data.Entity.extend("Todo", {
////    Id: { type: "int", key: true, computed: true },
////    Task: { type: String, required: true, maxLength: 200 },
////    DueDate: { type: Date },
////    Completed: { type: Boolean },
////    Person: { type: "Person", required: true, inverseProperty: "Todos" }
////});

////var Person = $data.Entity.extend("Person", {
////    Id: { type: "int", key: true, computed: true },
////    Name: { type: String, required: true, maxLength: 200 },
////    Todos: { type: Array, elementType: Todo, inverseProperty: "Person" }
////});

////$data.EntityContext.extend("TodoDatabase", {
////    Todos: { type: $data.EntitySet, elementType: Todo },
////    People: { type: $data.EntitySet, elementType: Person }
////});

////var Location = $data.Entity.extend("Location", {
////    City: { type: String },
////    Country: { type: String }
////});
////$data.Entity.extend("Todo", {
////    Id: { type: "int", key: true, computed: true },
////    Task: { type: String, required: true, maxLength: 200 },
////    DueDate: { type: Date },
////    Completed: { type: Boolean },
////    Location: { type: Location }
////});

////$data.EntityContext.extend("TodoDatabase", {
////    Todos: { type: $data.EntitySet, elementType: Todo }
////});

////var todoDB = new TodoDatabase('http://mysite/myapi');

////todoDB.onReady(function () {
////    //Work with todoDB now
////});

//////Create
////var tasks = todoDB.Todos.addMany([
////    { Task: 'Step0: Get this this list', Completed: true },
////    { Task: 'Step1: Define your data model' },
////    { Task: 'Step2: Initialize data storage' }
////]);
////todoDB.saveChanges(function () {
////    tasks.forEach(function (todo) { alert(todo.Id) });
////});

//////Create related data
////todoDB.Todos.add({ 
////    Task: "Your task", 
////    Person: new Person({Name: 'Peter'});
////});
////todoDB.saveChanges();

//////Retrieve the existing item by Id and attach to the context to track changes
////var todo = todoDB.Todos.attachOrGet({ Id: 1 });
////todo.Completed = true;
////todoDB.saveChanges();


//////Remove with query
////todoDB.Todos
////        .filter("it.Completed == true")
////        .removeAll(function () {
////            alert("items removed");
////        });

////dbcontext
////   .Products
////   .filter(function (p) {
////       return p.Category.ID == 42
////   }).skip(10).take(5)
////   .toArray()

////var product = new Northwind.Product({
////    ProductName: 'Lady Gray Tea',
////    Cateogory: new Northwind.Category('Teas')
////});
////Northwind.Products.add(product);
////Northwind.saveChanges();