import { Injectable } from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Music, mockMusics } from 'App/Model/music';

@Injectable()
export class MusicsService extends GenericService<Music> {
    constructor() {
        super(mockMusics);
    }
}