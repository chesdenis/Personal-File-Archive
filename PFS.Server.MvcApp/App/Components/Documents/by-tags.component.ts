import { Component, OnInit } from '@angular/core';
import { DocumentsService } from './documents.service';
import { Document } from 'App/Model/document';

@Component({
    moduleId: module.id,
    selector: 'by-tags-component',
    templateUrl: './by-tags.component.html'
})
export class ByTagsComponent implements OnInit {

    constructor(private dataService:DocumentsService) { }

    documents: Document[];

    getDocuments(): void {
        this.dataService
            .getEntitiesAsync()
            .then(documents => {
                this.documents = documents;
            });
    }

    ngOnInit(): void {
        this.getDocuments();
    }
}