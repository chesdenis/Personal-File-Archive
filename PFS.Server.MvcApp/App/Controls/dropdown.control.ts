import {Component, Input} from "@angular/core";
import {DropdownOptionControl} from "./dropdown-option.control";

@Component({
    selector: "dropdown",
    templateUrl: "./dropdown.control.html"
})
export class DropdownControl{
    @Input() title:string;
    isExpanded:boolean = false;
    options:DropdownOptionControl[] = [];

    addOption(option:DropdownOptionControl){
        this.options.push(option);
    }

    getClasses(){
        return {
            open: this.isExpanded
        }
    }

    expandOptions(){
        if(this.isExpanded){
            this.isExpanded = false;
        }
        else{
            this.isExpanded = true;
        }
    }
}