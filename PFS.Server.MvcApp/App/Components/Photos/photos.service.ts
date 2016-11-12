import { Injectable } from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Photo, mockPhotos } from '../../Model/photo';

@Injectable()
export class PhotosService extends GenericService<Photo> {
    constructor() {
        super(mockPhotos);
    }
}