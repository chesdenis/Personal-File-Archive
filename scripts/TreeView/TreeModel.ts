
class TreeModel 
{  
    private Entities: {[key: number] : ITreeEntity};

    constructor() {
        this.Entities = {};
    }

    addToRoot(treeEntity:ITreeEntity){
        let rootEntity:ITreeEntity = this.GetEntityById(0);
        this.addAsChild(treeEntity, rootEntity);
    }

    addAsChild(treeEntity:ITreeEntity, parentEntity:ITreeEntity){
        parentEntity.Children.push(treeEntity);
    }

    remove(treeEntity: ITreeEntity){
        this.removeChildren(treeEntity);
        this.Entities[treeEntity.Id] = null;
    }

    replace(targetEntity:ITreeEntity, newEntity:ITreeEntity){

    }

    removeChildren(treeEntity:ITreeEntity){
        for(let i:number = 0; i < treeEntity.Children.length; i++){
            let child: ITreeEntity = treeEntity.Children[i];
            this.remove(child);
        }
    }

    expand(treeEntity :ITreeEntity){

    }

    collapse(treeEntity:ITreeEntity){

    }

    private GetEntityById(Id:number):ITreeEntity{
        return this.Entities[Id];
    }
}