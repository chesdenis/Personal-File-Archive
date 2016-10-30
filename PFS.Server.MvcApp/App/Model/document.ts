import {Entity} from './entity';
import {Tag} from './tag';

export interface Document extends Entity{
    Tags: Tag[];
}