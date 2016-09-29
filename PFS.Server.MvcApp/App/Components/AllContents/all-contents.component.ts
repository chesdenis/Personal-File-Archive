import {Component} from '@angular/core';
import {FilterOptionEntity} from '../../Controls/Filters/filter-option-entity'

@Component({
    moduleId: module.id,
    selector:'all-contents-component',
    templateUrl:'./all-contents.component.html'
})
export class AllContentsComponent {
    contentFilterOptions: FilterOptionEntity[] = [
        new FilterOptionEntity("btn-info", "/tags", "Tags"),
        new FilterOptionEntity("btn-info", "/albums", "Albums"),
        new FilterOptionEntity("btn-info", "/dates", "Dates"),
    ];
}