class TreeEntity implements ITreeEntity
{
    Id : number;
    Title: string;
    Level: number;
    Url: string;
    IsExpanded: boolean;
    IsHidden: boolean;
    IsShowLoading: boolean;
    Children: ITreeEntity[];

    
}