"use strict";
var TreeModel = (function () {
    function TreeModel() {
        this.Entities = {};
    }
    TreeModel.prototype.addToRoot = function (treeEntity) {
        treeEntity.Id = this.getId();
        treeEntity.Url = "/" + treeEntity.Title;
        treeEntity.Level = 0;
        this.Entities[treeEntity.Id] = treeEntity;
    };
    TreeModel.prototype.addAsChild = function (treeEntity, parentEntity) {
        parentEntity.Children.push(treeEntity);
        treeEntity.Id = this.getId();
        treeEntity.Level = parentEntity.Level + 1;
        treeEntity.Url = parentEntity.Url + "/" + treeEntity.Title;
        treeEntity.Parent = parentEntity;
        this.Entities[treeEntity.Id] = treeEntity;
    };
    TreeModel.prototype.remove = function (treeEntity) {
        this.removeChildren(treeEntity);
        delete this.Entities[treeEntity.Id];
    };
    TreeModel.prototype.replace = function (targetEntity, newEntity) {
        targetEntity = newEntity;
    };
    TreeModel.prototype.removeChildren = function (treeEntity) {
        for (var i = 0; i < treeEntity.Children.length; i++) {
            var child = treeEntity.Children[i];
            this.remove(child);
            child.Parent = null;
        }
        treeEntity.Children = [];
    };
    TreeModel.prototype.expand = function (treeEntity) {
        treeEntity.IsShowLoading = true;
        //todo expanding
        treeEntity.IsShowLoading = false;
        treeEntity.IsExpanded = true;
        this.show(treeEntity);
    };
    TreeModel.prototype.show = function (treeEntity) {
        treeEntity.IsHidden = false;
        treeEntity.Children.forEach(function (entity, index) {
            this.show(entity);
        });
    };
    TreeModel.prototype.collapse = function (treeEntity) {
        //todo collapsing
        treeEntity.IsExpanded = false;
        this.hide(treeEntity);
    };
    TreeModel.prototype.hide = function (treeEntity) {
        treeEntity.IsHidden = true;
        treeEntity.Children.forEach(function (entity, index) {
            this.hide(entity);
        });
    };
    TreeModel.prototype.getById = function (Id) {
        if (typeof (this.Entities[Id]) === "undefined") {
            return null;
        }
        return this.Entities[Id];
    };
    TreeModel.prototype.getId = function () {
        var id = 0;
        for (var k in this.Entities) {
            if (this.Entities.hasOwnProperty(k)) {
                id++;
            }
        }
        return id;
    };
    return TreeModel;
}());
exports.TreeModel = TreeModel;
//# sourceMappingURL=TreeModel.js.map