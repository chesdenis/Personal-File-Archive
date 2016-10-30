import {Entity} from './entity';
import {Tag} from './tag';

export interface Book extends Entity{
    Tags: Tag[];
}