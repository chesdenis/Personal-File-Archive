import {Entity} from './entity';
import {Tag} from './tag';

export interface Music extends Entity{
    Tags: Tag[];
}

export const mockMusics: Music[] = [
    { Id: 11, Name: 'music:Mr. Nice', Guid: "", Path: "", Tags: [] },
    { Id: 12, Name: 'music:Narco', Guid: "", Path: "", Tags: [] },
    { Id: 13, Name: 'music:Bombasto', Guid: "", Path: "", Tags: [] },
    { Id: 14, Name: 'music:Celeritas', Guid: "", Path: "", Tags: [] },
    { Id: 15, Name: 'music:Magneta', Guid: "", Path: "", Tags: [] },
    { Id: 16, Name: 'music:RubberMan', Guid: "", Path: "", Tags: [] },
    { Id: 17, Name: 'music:Dynama', Guid: "", Path: "", Tags: [] },
    { Id: 18, Name: 'music:Dr IQ', Guid: "", Path: "", Tags: [] },
    { Id: 19, Name: 'music:Magma', Guid: "", Path: "", Tags: [] },
    { Id: 20, Name: 'music:Tornado', Guid: "", Path: "", Tags: [] }
];
