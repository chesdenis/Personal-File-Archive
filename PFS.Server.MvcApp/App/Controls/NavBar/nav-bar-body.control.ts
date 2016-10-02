import {Component} from '@angular/core';
import {NavTopBarControl} from './nav-top-bar.control';

@Component({
    moduleId: module.id,
    selector: "nav-bar-body",
    templateUrl: "./nav-bar-body.control.html"
})
export class NavBarBodyControl
{
    isBodyExpanded: boolean = false;

    constructor(private navBar: NavTopBarControl) {
        this.navBar.body = this;
    }

    toggle() {
        this.isBodyExpanded = !this.isBodyExpanded;
    }

    hide()
    {
        this.isBodyExpanded = false;
    }

    getClasses()
    {
        return {
            'collapse': !this.isBodyExpanded
        }
    }
}