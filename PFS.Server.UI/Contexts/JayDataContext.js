(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["PFS.Server.Core.Entities.JobStatus"] = $data.createEnum("PFS.Server.Core.Entities.JobStatus", [{
            "name": "NotStarted",
            "index": 0,
            "value": 0
        },
        {
            "name": "InProgress",
            "index": 1,
            "value": 1
        },
        {
            "name": "Error",
            "index": 2,
            "value": 2
        },
        {
            "name": "Done",
            "index": 3,
            "value": 3
        }
    ]);

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

    types["PFS.Server.Core.Entities.Video"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.Video", {
        Id: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Data: {
            "type": "Edm.String"
        }
    });

    types["PFS.Server.Core.Entities.ContentSource"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.ContentSource", {
        Id: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        DriveName: {
            "type": "Edm.String"
        },
        Path: {
            "type": "Edm.String"
        }
    });

    types["PFS.Server.Core.Entities.Job"] = $data("$data.Entity").extend("PFS.Server.Core.Entities.Job", {
        Id: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Args: {
            "type": "Edm.String"
        },
        Comments: {
            "type": "Edm.String"
        },
        Status: {
            "type": "PFS.Server.Core.Entities.JobStatus",
            "nullable": false,
            "required": true
        },
        Started: {
            "type": "Edm.DateTimeOffset"
        },
        Finished: {
            "type": "Edm.DateTimeOffset"
        },
        PlannedActionsCount: {
            "type": "Edm.Int32"
        },
        CompletedActionsCount: {
            "type": "Edm.Int32"
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

    types["System.Linq.IQueryable_1OfPfsDrive"] = $data("$data.Entity").extend("System.Linq.IQueryable_1OfPfsDrive", null);

    types["System.Linq.IQueryable_1OfPfsFolder"] = $data("$data.Entity").extend("System.Linq.IQueryable_1OfPfsFolder", null);

    types["System.Linq.IQueryable_1OfPfsFile"] = $data("$data.Entity").extend("System.Linq.IQueryable_1OfPfsFile", null);

    exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
        Tags: {
            "type": "$data.EntitySet",
            "elementType": "PFS.Server.Core.Entities.Tag"
        },
        Videos: {
            "type": "$data.EntitySet",
            "elementType": "PFS.Server.Core.Entities.Video"
        },
        ContentSources: {
            "type": "$data.EntitySet",
            "elementType": "PFS.Server.Core.Entities.ContentSource"
        },
        Jobs: {
            "type": "$data.EntitySet",
            "elementType": "PFS.Server.Core.Entities.Job"
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
                    "returnType": "System.Linq.IQueryable_1OfPfsDrive",
                    "params": []
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
                    "returnType": "System.Linq.IQueryable_1OfPfsFolder",
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
                    "returnType": "System.Linq.IQueryable_1OfPfsFile",
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

    exports.PFS = {
        "Server": {
            "Core": {
                "Entities": {
                    "JobStatus": types["PFS.Server.Core.Entities.JobStatus"],
                    "PfsDrive": types["PFS.Server.Core.Entities.PfsDrive"],
                    "PfsFolder": types["PFS.Server.Core.Entities.PfsFolder"],
                    "PfsFile": types["PFS.Server.Core.Entities.PfsFile"],
                    "Tag": types["PFS.Server.Core.Entities.Tag"],
                    "Video": types["PFS.Server.Core.Entities.Video"],
                    "ContentSource": types["PFS.Server.Core.Entities.ContentSource"],
                    "Job": types["PFS.Server.Core.Entities.Job"],
                    "IOPfsEntity": types["PFS.Server.Core.Entities.IOPfsEntity"]
                }
            }
        }
    };

    exports.System = {
        "Linq": {
            "IQueryable_1OfPfsDrive": types["System.Linq.IQueryable_1OfPfsDrive"],
            "IQueryable_1OfPfsFolder": types["System.Linq.IQueryable_1OfPfsFolder"],
            "IQueryable_1OfPfsFile": types["System.Linq.IQueryable_1OfPfsFile"]
        }
    };

    exports.Default = {
        "Container": types["Default.Container"]
    };

    var ctxType = exports.type;
    exports.factory = function(config) {
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

    exports["context"] = exports.factory();

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {}

});