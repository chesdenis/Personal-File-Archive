import { Injectable } from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Document, mockDocuments } from '../../Model/document';

@Injectable()
export class DocumentsService extends GenericService<Document> {
    constructor() {
        super(mockDocuments);
    }
}