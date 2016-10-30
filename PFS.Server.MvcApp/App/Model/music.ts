import {Entity} from './entity';
import {Tag} from './tag';

export interface Music extends Entity{
    Tags: Tag[];
}