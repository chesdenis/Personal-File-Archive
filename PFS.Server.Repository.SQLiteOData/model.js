var model = {
    namespace: "pfs",
    entityTypes: {
        "Tags": {
            "rowid": {"type": "Edm.Int32", key: true},
            "name": {"type": "Edm.String"},            
        }
    },   
    entitySets: {
        "tags": {
            entityType: "pfs.Tags"
        }
    }
};

module.exports = model;