import {Entity} from './entity';
import {Tag} from './tag';

export interface Video extends Entity{
    Tags: Tag[];
}