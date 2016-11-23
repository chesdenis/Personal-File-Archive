import {Component, Input} from '@angular/core';
import {FilterOptionEntity} from './filter-option-entity'

@Component({
    moduleId: module.id,
    selector: 'content-filter',
    templateUrl: "./content-filter.control.html",
})
export class ContentFilterControl { 
    @Input() filterOptions: FilterOptionEntity [] = [];
}  