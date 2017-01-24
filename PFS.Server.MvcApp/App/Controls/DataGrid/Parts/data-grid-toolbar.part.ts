import { Component, OnInit } from '@angular/core';
import { BaseButton } from '../buttons/base.button';
 
@Component({
    selector: "div[data-grid-toolbar]",
    template: `<ng-content></ng-content>`,
    host: {
        '[class]': 'hostClass',
        '[attr.role]': 'hostRole',
        '[attr.aria-label]':'hostAriaLabel'
    } 
})
export class DataGridToolbarPart implements OnInit {
    hostClass: string = "btn-group";
    hostRole: string = "toolbar";
    hostAriaLabel: string = "grid-panel";
     
    constructor() {
        
    }

    onEvent() { 
        console.log(" DataGridToolbarPart outside event");
    }

    ngOnInit() {
        console.log("DataGridToolbarPart initiated");
    }
}