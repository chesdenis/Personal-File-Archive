import { Component, OnInit } from '@angular/core';
import { DocumentsService } from './documents.service';
import { Document } from 'App/Model/document';

@Component({
    moduleId: module.id,
    selector: 'no-filter-component',
    templateUrl: './no-filter.component.html'
})
export class NoFilterComponent implements OnInit {
    constructor(private dataService: DocumentsService) { }

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