import {Component} from '@angular/core';
import {FilterOptionEntity} from '../../Controls/Filters/filter-option-entity';

@Component({
    moduleId: module.id,
    selector:'documents-component',
    templateUrl:'./documents.component.html'
})
export class DocumentsComponent {
    contentFilterOptions: FilterOptionEntity[] = [
        new FilterOptionEntity("btn-info", "./Default", "No filter"),
        new FilterOptionEntity("btn-info", "./Tags", "Tags"),
        new FilterOptionEntity("btn-info", "./Dates", "Dates"),
    ];
}