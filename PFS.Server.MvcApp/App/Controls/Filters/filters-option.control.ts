import {Component, Input} from '@angular/core';
import {ContentFilterControl} from './content-filter.control'

@Component({
    moduleId: module.id,
  selector: 'filters-option',
  templateUrl:"./filters-option.control.html",
})
export class FiltersOptionControl { 
    
    @Input() filterTitle: string;
    @Input() IsActive: boolean;

    constructor(contentFilter: ContentFilterControl){
        contentFilter.AddFilterOption(this);
    }


}  