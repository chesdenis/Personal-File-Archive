import {Entity} from './entity';
import {Tag} from './tag';

export interface Book extends Entity{
    Tags: Tag[];
}

export const mockBooks: Book[] = [
    { Id: 11, Name: 'book:Mr. Nice', Guid: "", Path: "", Tags: [] },
    { Id: 12, Name: 'book:Narco', Guid: "", Path: "", Tags: [] },
    { Id: 13, Name: 'book:Bombasto', Guid: "", Path: "", Tags: [] },
    { Id: 14, Name: 'book:Celeritas', Guid: "", Path: "", Tags: [] },
    { Id: 15, Name: 'book:Magneta', Guid: "", Path: "", Tags: [] },
    { Id: 16, Name: 'book:RubberMan', Guid: "", Path: "", Tags: [] },
    { Id: 17, Name: 'book:Dynama', Guid: "", Path: "", Tags: [] },
    { Id: 18, Name: 'book:Dr IQ', Guid: "", Path: "", Tags: [] },
    { Id: 19, Name: 'book:Magma', Guid: "", Path: "", Tags: [] },
    { Id: 20, Name: 'book:Tornado', Guid: "", Path: "", Tags: [] }
];
