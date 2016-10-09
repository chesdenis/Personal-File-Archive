import {Component} from '@angular/core';
import {FilterOptionEntity} from '../../Controls/Filters/filter-option-entity';

@Component({
    moduleId: module.id,
    selector:'photos-component',
    templateUrl:'./photos.component.html'
})
export class PhotosComponent {
    contentFilterOptions: FilterOptionEntity[] = [
        new FilterOptionEntity("btn-info", "./Default", "No filter"),
        new FilterOptionEntity("btn-info", "./Tags", "Tags"),
        new FilterOptionEntity("btn-info", "./Albums", "Albums"),
        new FilterOptionEntity("btn-info", "./Dates", "Dates"),
        new FilterOptionEntity("btn-info", "./Places", "Places"),
    ];
}