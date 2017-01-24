import { Component, OnInit, Input } from '@angular/core';
import { DataGridToolbarPart } from '../Parts/data-grid-toolbar.part';
import { DataGridSettingsConfig } from '../Configs/data-grid-settings.config';

@Component({
    selector: "div[data-grid-settings]",
    template: `<ng-content></ng-content>`,
    host: {
        '[class]':'hostCssClass'
    }
})
export class DataGridSettingsComponent implements OnInit {
    hostCssClass: string = "panel panel-default";   

    @Input() dgSettings: DataGridSettingsConfig;

    ngOnInit() {
        console.log("DataGridSettingsComponent init...")
    }
     
}