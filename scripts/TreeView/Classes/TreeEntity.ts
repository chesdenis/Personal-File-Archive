import {ITreeEntity} from '../Interfaces/ITreeEntity'

export class TreeEntity implements ITreeEntity
{
    Id : number;
    Title: string;
    Level: number;
    Url: string;
    IsExpanded: boolean;
    IsHidden: boolean;
    IsShowLoading: boolean;
    Parent: ITreeEntity;
    Children: ITreeEntity[];

    constructor(title:string = ''){
        this.Title = title;
        this.Children = [];
    }
}