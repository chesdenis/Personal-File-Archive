import {Component, Input} from '@angular/core';
import {NavTopBarControl} from './nav-top-bar.control';

@Component({
    moduleId: module.id,
    selector: "nav-bar-header",
    templateUrl: "./nav-bar-header.control.html"
})
export class NavBarHeaderControl {
    @Input() brandText: string = "";
    brandExtraText: string = "";
   
    constructor(private navBar: NavTopBarControl) {
        this.navBar.header = this;
    }

    toggleBody() {
        this.navBar.toggleBody();
    }

    setBrandAdditionalText(text: string) {
        this.brandExtraText = text;
    }

}