var TreeModel = (function () {
    function TreeModel() {
        this.Entities = {};
    }
    TreeModel.prototype.addToRoot = function (treeEntity) {
        var rootEntity = this.GetEntityById(0);
        this.addAsChild(treeEntity, rootEntity);
    };
    TreeModel.prototype.addAsChild = function (treeEntity, parentEntity) {
        parentEntity.Children.push(treeEntity);
    };
    TreeModel.prototype.remove = function (treeEntity) {
        this.removeChildren(treeEntity);
        this.Entities[treeEntity.Id] = null;
    };
    TreeModel.prototype.replace = function (targetEntity, newEntity) {
    };
    TreeModel.prototype.removeChildren = function (treeEntity) {
        for (var i = 0; i < treeEntity.Children.length; i++) {
            var child = treeEntity.Children[i];
            this.remove(child);
        }
    };
    TreeModel.prototype.expand = function (treeEntity) {
    };
    TreeModel.prototype.collapse = function (treeEntity) {
    };
    TreeModel.prototype.GetEntityById = function (Id) {
        return this.Entities[Id];
    };
    return TreeModel;
}());
//# sourceMappingURL=TreeModel.js.map