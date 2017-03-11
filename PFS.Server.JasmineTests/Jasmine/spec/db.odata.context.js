(function (mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function (exports, $data) {
    var types = {};


    $data.Entity.extend('PFS.Server.Core.Shared.Entities.Tag', {
        'Id': { 'key': true, 'type': 'Edm.Int32', 'nullable': false, 'required': true },
        'Name': { 'type': 'Edm.String' }
    });

    $data.Entity.extend('PFS.Server.Core.Shared.Entities.File', {
        'Id': { 'key': true, 'type': 'Edm.Int32', 'nullable': false, 'required': true },
        'Name': { 'type': 'Edm.String' },
        'Path': { 'type': 'Edm.String' }
    });

    $data.Entity.extend('PFS.Server.Core.Shared.Entities.Folder', {
        'Id': { 'key': true, 'type': 'Edm.Int32', 'nullable': false, 'required': true },
        'Name': { 'type': 'Edm.String' },
        'Path': { 'type': 'Edm.String' }
    });

    $data.Entity.extend('System.Linq.IQueryable_1OfFile', {

    });

    $data.Entity.extend('System.Linq.IQueryable_1OfFolder', {

    });

    exports.type = $data.EntityContext.extend('Default.Container', {
        'Tags': { type: $data.EntitySet, elementType: 'PFS.Server.Core.Shared.Entities.Tag' },
        'Files': { type: $data.EntitySet, elementType: 'PFS.Server.Core.Shared.Entities.File' },
        'Folders': { type: $data.EntitySet, elementType: 'PFS.Server.Core.Shared.Entities.Folder' }
    });

    var ctxType = exports.type;

    exports.dbContextFactory = function (config, url) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: url,
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };
});