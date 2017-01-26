import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: "base-column",
    template: `<ng-content></ng-content>`
})
export class BaseColumn {
    type: string;

    @Input() internalName: string;
    @Input() headerText: string;
    @Input() isVisible: boolean;

    constructor() {
        this.type = "base";
    }

}