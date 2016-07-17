export interface ITreeEntity{
    Id: number;
    Title: string;
    Level: number;
    Url: string;
    IsExpanded: boolean;
    IsHidden: boolean;
    IsShowLoading: boolean;
    Parent: ITreeEntity;
    Children: ITreeEntity[];
}