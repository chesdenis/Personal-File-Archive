import {ITreeEntity} from '../Interfaces/ITreeEntity'

export class TreeModel 
{  
    private Entities: {[key:number] :ITreeEntity};

    constructor() {
        this.Entities = {};
    }

    addToRoot(treeEntity:ITreeEntity){
        treeEntity.Id = this.getId();
        treeEntity.Url = `/${treeEntity.Title}`;
        treeEntity.Level = 0;

        this.Entities[treeEntity.Id] = treeEntity;
    }

    addAsChild(treeEntity:ITreeEntity, parentEntity:ITreeEntity){
        parentEntity.Children.push(treeEntity);

        treeEntity.Id = this.getId();
        treeEntity.Level = parentEntity.Level + 1;
        treeEntity.Url = `${parentEntity.Url}/${treeEntity.Title}`;
        treeEntity.Parent = parentEntity;
        this.Entities[treeEntity.Id] = treeEntity;
    }

    remove(treeEntity: ITreeEntity){
        this.removeChildren(treeEntity);
        delete this.Entities[treeEntity.Id];
    }

    replace(targetEntity:ITreeEntity, newEntity:ITreeEntity){
        targetEntity = newEntity;
    }

    removeChildren(treeEntity:ITreeEntity){
        for(let i:number = 0; i < treeEntity.Children.length; i++){
            let child: ITreeEntity = treeEntity.Children[i];
            this.remove(child);
            child.Parent = null;
        }

        treeEntity.Children = [];
    }

    expand(treeEntity :ITreeEntity){
        treeEntity.IsShowLoading = true;

        //todo expanding

        treeEntity.IsShowLoading = false;
        treeEntity.IsExpanded = true;
        this.show(treeEntity);        
    }

    private show(treeEntity:ITreeEntity){
        treeEntity.IsHidden = false;

        treeEntity.Children.forEach(function(entity:ITreeEntity, index: number) {
            this.show(entity);
        });
    }

    collapse(treeEntity:ITreeEntity){
        //todo collapsing

        treeEntity.IsExpanded = false;
        this.hide(treeEntity);
    }

    private hide(treeEntity:ITreeEntity){
        treeEntity.IsHidden = true;

        treeEntity.Children.forEach(function(entity:ITreeEntity, index: number) {
            this.hide(entity);
        });
    }

    getById(Id:number):ITreeEntity{
        if(typeof(this.Entities[Id]) === "undefined"){
            return null;
        }
        return this.Entities[Id];
    }

    private getId():number{
        let id: number = 0;

        for(var k in this.Entities){
            if(this.Entities.hasOwnProperty(k)){
                id++;
            }
        }

        return id;
    }
}