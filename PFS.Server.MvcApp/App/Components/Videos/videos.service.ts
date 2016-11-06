import { Injectable } from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Video, mockVideos } from '../../Model/video';

@Injectable()
export class VideosService extends GenericService<Video> {
    constructor() {
        super(mockVideos);
    }
}