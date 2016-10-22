import {Component} from '@angular/core';
import {FilterOptionEntity} from '../../Controls/Filters/filter-option-entity';

@Component({
    moduleId: module.id,
    selector:'musics-component',
    templateUrl:'./musics.component.html'
})
export class MusicsComponent {
    contentFilterOptions: FilterOptionEntity[] = [
        new FilterOptionEntity("btn-info", "./Default", "No filter"),
        new FilterOptionEntity("btn-info", "./Tags", "Tags"),
        new FilterOptionEntity("btn-info", "./Dates", "Dates")
    ];   
}