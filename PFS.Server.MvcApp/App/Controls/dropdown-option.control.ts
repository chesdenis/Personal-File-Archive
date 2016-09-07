import {Component, Input, ElementRef} from "@angular/core";
import {DropdownControl} from "./dropdown.control";

@Component({
    selector: "dropdown-option",
    templateUrl: "./dropdown-option.control.html"
})
export class DropdownOptionControl {
    @Input() value: string;
    content: string;

    constructor(dropdown: DropdownControl, private elRef: ElementRef) {
        dropdown.addOption(this);
    }

    ngAfterContentChecked() {
        this.content = this.elRef.nativeElement.textContent;
    }
}