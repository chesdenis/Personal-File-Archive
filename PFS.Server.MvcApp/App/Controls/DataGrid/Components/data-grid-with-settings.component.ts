import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DataGridToolbarPart } from '../Parts/data-grid-toolbar.part';
import { DataGridSettingsConfig } from '../Configs/data-grid-settings.config';
import { DataGridComponent } from './data-grid.component';

@Component({
    selector: "div[data-grid-with-settings]",
    template: `
<div data-grid-toolbar>
<button *ngIf="!settings.isConfigMode" [settings]="settings" switch-mode-to-config></button>
<button *ngIf="settings.isConfigMode" [settings]="settings" switch-mode-to-data></button>
</div>
<div *ngIf="settings.isConfigMode" class="panel-body">
        <p>Columns visibility:</p>
        <ul class="list-group">
            <li *ngFor="let column of settings.columns" class="list-group-item">
                <label><input type="checkbox" [(ngModel)]="column.config.isVisible">{{column.config.headerText}}</label>
            </li>
        </ul>
</div>
<div *ngIf="!settings.isConfigMode" data-grid>
<ng-content></ng-content>
</div>`,
    host: {
        '[class]':'hostCssClass'
    }
})
export class DataGridWithSettingsComponent implements OnInit {
    hostCssClass: string = "panel panel-default";   

    @Input() settings: DataGridSettingsConfig;
        
    ngOnInit() {
        console.log("DataGridSettingsComponent init...")
        
    }
     
}