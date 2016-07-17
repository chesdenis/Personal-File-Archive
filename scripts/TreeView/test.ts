import {ITreeEntity} from './Interfaces/ITreeEntity'
import {TreeEntity} from './Classes/TreeEntity'
import {TreeModel} from './Classes/TreeModel'

let folder1:ITreeEntity = new TreeEntity('Folder 1');
let folder1_1:ITreeEntity = new TreeEntity('Folder 1.1');
let folder1_1_1:ITreeEntity = new TreeEntity('Folder 1.1.1');
let folder1_2:ITreeEntity = new TreeEntity('Folder 1.2');
let folder2:ITreeEntity = new TreeEntity('Folder 2');
let folder2_1:ITreeEntity = new TreeEntity('Folder 2.1');

let treeModel:TreeModel = new TreeModel();

treeModel.addToRoot(folder1);
treeModel.addAsChild(folder1_1, folder1);
treeModel.addAsChild(folder1_1_1, folder1_1);
treeModel.replace(folder1_2, folder1_1);

treeModel.addToRoot(folder2);
treeModel.addAsChild(folder2_1, folder2);

//treeModel.removeChildren(folder1);
//treeModel.remove(folder1);
//treeModel.remove(folder2);
console.log(treeModel.getById(0));
