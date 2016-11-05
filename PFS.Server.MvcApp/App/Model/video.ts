import {Entity} from './entity';
import {Tag} from './tag';

export interface Video extends Entity{
    Tags: Tag[];
}

export const mockVideos: Video[] = [
    { Id: 11, Name: 'video:Mr. Nice', Guid: "", Path: "", Tags: [] },
    { Id: 12, Name: 'video:Narco', Guid: "", Path: "", Tags: [] },
    { Id: 13, Name: 'video:Bombasto', Guid: "", Path: "", Tags: [] },
    { Id: 14, Name: 'video:Celeritas', Guid: "", Path: "", Tags: [] },
    { Id: 15, Name: 'video:Magneta', Guid: "", Path: "", Tags: [] },
    { Id: 16, Name: 'video:RubberMan', Guid: "", Path: "", Tags: [] },
    { Id: 17, Name: 'video:Dynama', Guid: "", Path: "", Tags: [] },
    { Id: 18, Name: 'video:Dr IQ', Guid: "", Path: "", Tags: [] },
    { Id: 19, Name: 'video:Magma', Guid: "", Path: "", Tags: [] },
    { Id: 20, Name: 'video:Tornado', Guid: "", Path: "", Tags: [] }
];