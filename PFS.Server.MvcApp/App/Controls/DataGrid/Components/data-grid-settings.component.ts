import { Component, OnInit } from '@angular/core';
import { DataGridToolbarPart } from '../Parts/data-grid-toolbar.part';

@Component({
    selector: "div[data-grid-settings]",
    template: `<ng-content></ng-content>`,
    host: {
        '[class]':'hostCssClass'
    }
})
export class DataGridSettingsComponent implements OnInit {
    hostCssClass: string = "panel panel-default";   

    ngOnInit() {
        console.log("DataGridSettingsComponent init...")
    }
     
}