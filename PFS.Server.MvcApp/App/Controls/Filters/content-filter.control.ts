import {Component} from '@angular/core';
import {FiltersOptionControl} from './filters-option.control';

@Component({
    moduleId: module.id,
  selector: 'content-filter',
  templateUrl:"./content-filter.control.html",
})
export class ContentFilterControl { 

    filterOptions: FiltersOptionControl [] = [];

    AddFilterOption(option :FiltersOptionControl){
        this.filterOptions.push(option);
    };

    HightLightSelectedFilterOption(filterOption : FiltersOptionControl){
        return {
            "btn-success": filterOption.IsActive
        };
    };

    SelectActiveFilterOption(filterOption : FiltersOptionControl){
        this.filterOptions.forEach((option)=>{option.IsActive = false})
        filterOption.IsActive = true;
    };
    
    /*Event Handlers */

    FilterClickEventHandler(event, option:FiltersOptionControl){
        this.SelectActiveFilterOption(option);
    }
}  