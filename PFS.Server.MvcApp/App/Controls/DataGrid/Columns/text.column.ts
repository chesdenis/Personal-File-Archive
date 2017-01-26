import { Component, OnInit } from '@angular/core';
import { BaseColumn } from './base.column';

@Component({
    selector: "text-column",
    template: `TextColumn - {{internalName}} - {{headerText}}`
})
export class TextColumn extends BaseColumn implements OnInit {

    constructor() {
        super();
        this.type = "text";
    }

    ngOnInit() {
        console.log("TextColumn init...");
    }
}