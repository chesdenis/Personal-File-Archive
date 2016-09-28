import {Component} from '@angular/core';
import {FilterOptionEntity} from '../../Controls/Filters/filter-option-entity'

@Component({
    moduleId: module.id,
    selector:'all-component',
    templateUrl:'./all.component.html'
})
export class AllComponent {
    allComponentFilterOptions: FilterOptionEntity[] = [
        new FilterOptionEntity("btn-info", "/tags", "Tags"),
        new FilterOptionEntity("btn-info", "/albums", "Albums"),
        new FilterOptionEntity("btn-info", "/dates", "Dates"),
    ];
}