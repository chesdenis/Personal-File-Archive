import {Injectable} from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Book, mockBooks } from '../../Model/book';
import { Document, mockDocuments } from '../../Model/Document';
import { Music, mockMusics } from '../../Model/Music';
import { Photo,  mockPhotos } from '../../Model/Photo';
import { Video, mockVideos} from '../../Model/Video';


import { Entity } from '../../Model/Entity';

@Injectable()
export class AllContentsService extends GenericService<Entity>  {
    constructor() {
        let books = mockBooks;
        let documents = mockDocuments;
        let musics = mockMusics;
        let photos = mockPhotos;
        let videos = mockVideos;

        let resultArray: Entity[] = [];

        resultArray = resultArray.concat(books, documents, musics, photos, videos);

        super(resultArray);
    }
}