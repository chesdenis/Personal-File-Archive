import {Component} from '@angular/core';
import { FilterOptionEntity } from '../../Controls/Filters/filter-option-entity';

@Component({
    moduleId: module.id,
    selector:'books-component',
    templateUrl:'./books.component.html'
})
export class BooksComponent {
       contentFilterOptions: FilterOptionEntity[] = [
        new FilterOptionEntity("btn-info", "./Default", "No filter"),
        new FilterOptionEntity("btn-info", "./Tags", "Tags"),
        new FilterOptionEntity("btn-info", "./Dates", "Dates"),
       ];
}