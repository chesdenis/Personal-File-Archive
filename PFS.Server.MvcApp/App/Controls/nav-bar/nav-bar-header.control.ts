import {Component, Input} from '@angular/core';
import {NavTopBarControl} from './nav-top-bar.control';

@Component({
    selector: "nav-bar-header",
    templateUrl: "./nav-bar-header.control.html"
})
export class NavBarHeaderControl {
    @Input() brandText: string = "";

    constructor(private navBar: NavTopBarControl) {
        this.navBar.header = this;
    }

    toggleBody() {
        this.navBar.toggleBody();
    }
}