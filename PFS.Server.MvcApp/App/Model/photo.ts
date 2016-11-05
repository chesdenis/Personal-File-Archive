import {Entity} from './entity';
import {Tag} from './tag';

export interface Photo extends Entity{
    Tags: Tag[];
}

export const mockPhotos: Photo[] = [
    { Id: 11, Name: 'photo:Mr. Nice', Guid: "", Path: "", Tags: [] },
    { Id: 12, Name: 'photo:Narco', Guid: "", Path: "", Tags: [] },
    { Id: 13, Name: 'photo:Bombasto', Guid: "", Path: "", Tags: [] },
    { Id: 14, Name: 'photo:Celeritas', Guid: "", Path: "", Tags: [] },
    { Id: 15, Name: 'photo:Magneta', Guid: "", Path: "", Tags: [] },
    { Id: 16, Name: 'photo:RubberMan', Guid: "", Path: "", Tags: [] },
    { Id: 17, Name: 'photo:Dynama', Guid: "", Path: "", Tags: [] },
    { Id: 18, Name: 'photo:Dr IQ', Guid: "", Path: "", Tags: [] },
    { Id: 19, Name: 'photo:Magma', Guid: "", Path: "", Tags: [] },
    { Id: 20, Name: 'photo:Tornado', Guid: "", Path: "", Tags: [] }
];
