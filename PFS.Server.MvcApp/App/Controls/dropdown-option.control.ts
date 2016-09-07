import {Component, Input} from "@angular/core";
import {DropdownControl} from "./dropdown.control";

@Component({
    selector: "dropdown-option",
    templateUrl: "./dropdown-option.control.html"
})
export class DropdownOptionControl{
    @Input() value:string;

    constructor(dropdown:DropdownControl){
        dropdown.addOption(this);
    }
}