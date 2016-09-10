import {Component, Input} from '@angular/core';

@Component({
    selector: 'nav-bar-zone',
    templateUrl: './nav-bar-zone.control.html'
})
export class NavBarZoneControl
{
    @Input() align: string = "left";
    
    getClasses() {
        return {
            'navbar-left': this.align === "left",
            'navbar-right': this.align === "right"
        }
    }
}