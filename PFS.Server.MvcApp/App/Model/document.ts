import {Entity} from './entity';
import {Tag} from './tag';

export interface Document extends Entity{
    Tags: Tag[];
}

export const mockDocuments: Document[] = [
    { Id: 11, Name: 'document:Mr. Nice', Guid: "", Path: "", Tags: [] },
    { Id: 12, Name: 'document:Narco', Guid: "", Path: "", Tags: [] },
    { Id: 13, Name: 'document:Bombasto', Guid: "", Path: "", Tags: [] },
    { Id: 14, Name: 'document:Celeritas', Guid: "", Path: "", Tags: [] },
    { Id: 15, Name: 'document:Magneta', Guid: "", Path: "", Tags: [] },
    { Id: 16, Name: 'document:RubberMan', Guid: "", Path: "", Tags: [] },
    { Id: 17, Name: 'document:Dynama', Guid: "", Path: "", Tags: [] },
    { Id: 18, Name: 'document:Dr IQ', Guid: "", Path: "", Tags: [] },
    { Id: 19, Name: 'document:Magma', Guid: "", Path: "", Tags: [] },
    { Id: 20, Name: 'document:Tornado', Guid: "", Path: "", Tags: [] }
];