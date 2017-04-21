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


var JobStatus = types["PFS.Server.Core.Entities.JobStatus"] = $data.createEnum("PFS.Server.Core.Entities.JobStatus", [
    { name: 'NotStarted', value: 0 },
    { name: 'InProgress', value: 1 },
    { name: 'Error', value: 2 },
    { name: 'Done', value: 3 }
]);

types["PFS.Server.Core.Entities.Job"] = $data("$data.Entity").extend('PFS.Server.Core.Entities.Job', {
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
        "type": "Edm.String",
        "nullable": false,
    },
    Status: { "type": 'PFS.Server.Core.Entities.JobStatus', nullable: false },
    Comments: { "type": 'Edm.String' },
    Started: { "type": "Edm.DateTime", "nullable": true },
    Finished: { "type": "Edm.DateTime", "nullable": true },
    PlannedActionsCount: { "type": "Edm.Int32", "nullable": true },
    CompletedActionsCount: { "type": "Edm.Int32", "nullable": true }
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
    DriveName: { "type": "Edm.String" },
    Path: { "type":"Edm.String" }
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
    },
    Jobs: {
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.Job"
    },
    ContentSources:{
        "type": "$data.EntitySet",
        "elementType": "PFS.Server.Core.Entities.ContentSource"
    }
});

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