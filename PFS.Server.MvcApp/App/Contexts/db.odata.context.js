(function (mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function (exports, $data) {
    var types = {};


    $data.Entity.extend('PFS.Server.Core.Entities.Tag', {
        'Id': { 'key': true, 'type': 'Edm.Int32', 'nullable': false, 'required': true },
        'Name': { 'type': 'Edm.String' }
    });

    exports.type = $data.EntityContext.extend('Default.Container', {
        'Tags': { type: $data.EntitySet, elementType: 'PFS.Server.Core.Entities.Tag' }
    });

    var ctxType = exports.type;

    exports.dbContextFactory = function (config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://localhost:64245/odata",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };
});