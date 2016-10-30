import {Entity} from './entity';
import {Tag} from './tag';

export interface Photo extends Entity{
    Tags: Tag[];
}