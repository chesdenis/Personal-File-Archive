import { Component, OnInit } from '@angular/core';
import { BaseColumn } from './base.column';

@Component({
    selector: "dropdown-column",
    template: `DropdownColumn - {{internalName}} - {{headerText}}`
})
export class DropdownColumn extends BaseColumn implements OnInit {

    constructor() {
        super();
        this.type = "dropdown";
    }

    ngOnInit() {
        console.log("DropdownColumn init...");
    }
}