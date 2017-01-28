import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: "base-row",
    template: `<ng-content></ng-content>`
})
export class BaseRowsTemplate {
    type: string;

    @Input() row: any;
    
    constructor() {
        this.type = "base";
    }

}
