function update(collection, query, update, cb) {

}

function remove(collection, query, cb) {

}

function insert(collection, doc, cb) {

}

function query(collection, query, cb) {
    this.getDB(collection, function (err, db) {
        if (err)
            return cb(err);

        db.serialize(function () {
            if (query.$count) {
                db.get("SELECT count(*) as c from " + query.collection, function (err, result) {
                    return cb(null, result.c);
                });
            }
            else {
                var command = "SELECT {fields} FROM " + query.collection;

                command = command.replace("{fields}", selectToFields(query.$select));
                console.log("filter: " + JSON.stringify(query.$filter));

                if (query.$filter){
                    command = command + " " + filterToWhere(query.$filter);
                }

                if(query.$orderby){
                    command = command + " " + orderBy(query.$orderby);
                }

                if(query.$skip || query.$top){
                    command = command + " " + skipTopToLimitOffset(query.$skip, query.$top);
                }

                console.log(command);
                db.all(command, function (err, rows) {
                    return cb(null, JSON.stringify(rows));
                });
            }
        });
    });
}

function orderBy($orderby){
    var sort = [];

    for(var i = 0; i < $orderby.length; i++){
        var sortObj = $orderby[i];
        for(var k in sortObj){
            if(sortObj.hasOwnProperty(k)){
                sort.push(k + " " + sortObj[k]);
            }
        }
    }

    if(sort.length > 0){
        return "order by " + sort.join(", ");
    }
    else{
        return "";
    }
}

function skipTopToLimitOffset($skip, $top){
    var skipTop = "limit";

    if($top){
        skipTop = skipTop + " " + $top;
    }
    else{
        skipTop = skipTop + " " + "-1";
    }

    if($skip){
        skipTop = skipTop + " " + "offset" + " " + $skip;
    }

    return skipTop;
}

function selectToFields($select){
    var selectedFields = [];

    for(var k in $select){
        if($select.hasOwnProperty(k)){
            selectedFields.push(k);
        }
    }

    if(selectedFields.length > 0){
        return selectedFields.join(", ");
    }
    else{
        return "*";
    }
}

function filterToWhere($filter){
    var filter = transformFilter($filter);

    if(filter != ""){
        filter = "where " + filter;
    }

    return filter;
}

function transformFilter($filter) {
    var filter = "";
    for (var k in $filter) {
        if ($filter.hasOwnProperty(k)) {
            if (Object.prototype.toString.call($filter[k]) == "[object Array]") {
                var conds = [];

                for(var i =0; i < $filter[k].length; i++){
                    conds.push(transformFilter($filter[k][i]));
                }

                filter = filter + " " + conds.join(" " + operators[k] + " ");
            }
            else if (Object.prototype.toString.call($filter[k]) == "[object Object]") {
                if (k[0] == "$") {
                    filter = filter + " " + operators[k] + " " + transformFilter($filter[k]);
                }
                else{
                    filter = filter + " " + k + " " + transformFilter($filter[k]);
                }
            }
            else{
                if (k[0] == "$") {
                    filter = filter + " " + comparators[k] + " " + $filter[k];
                }
                else{
                    filter = filter + " " + k + " " + $filter[k];
                }
            }
        }
    }

    filter = filter.trim();

    return filter;
}

var comparators =
    {
        "$ne": "!=",
        "$lt": "<",
        "$le": "<=",
        "$gt": ">",
        "$ge": ">="
    };

var operators =
    {
        "$and": "and",
        "$or": "or"
    };

module.exports = function (odataServer, getDB) {
    odataServer.getDB = getDB;
    odataServer
        .update(update)
        .remove(remove)
        .query(query)
        .insert(insert)
};