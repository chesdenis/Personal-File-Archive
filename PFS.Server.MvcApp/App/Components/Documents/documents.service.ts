import { Injectable } from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Document, mockDocuments } from 'App/Model/document';

@Injectable()
export class DocumentsService extends GenericService<Document> {
    constructor() {
        super(mockDocuments);
    }
}