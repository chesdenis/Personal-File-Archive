import { Component, OnInit } from '@angular/core';
import { AllContentsService } from './all-contents.service';
import { Entity } from 'App/Model/Entity';

@Component({
    moduleId: module.id,
    selector: 'by-dates-component',
    templateUrl: './by-dates.component.html'
})
export class ByDatesComponent implements OnInit {
    constructor(private dataService: AllContentsService) { }

    entities: Entity[];

    getEntities(): void {
        this.dataService
            .getEntitiesAsync()
            .then(entities => {
                this.entities = entities;
            });
    }

    ngOnInit(): void {
        this.getEntities();
    }
}