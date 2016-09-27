﻿import {Component, Input} from '@angular/core';
import {NavBarHeaderControl} from './nav-bar-header.control';
import {NavBarBodyControl} from './nav-bar-body.control';


@Component({
    moduleId: module.id,
    selector: "nav-top-bar",
    templateUrl:"./nav-top-bar.control.html"
})
export class NavTopBarControl
{
    header: NavBarHeaderControl;
    body: NavBarBodyControl;

    toggleBody() {
        if (this.body != null) {
            this.body.toggle();
        }
    }

    hideBody() {
        if (this.body != null) {
            this.body.hide();
        }
    }

    setBrandAdditionalText(text:string) {
        if (this.header != null) {
            this.header.setBrandAdditionalText(text);
        }
    }
}