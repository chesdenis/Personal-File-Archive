import { Component, OnInit, Input } from "@angular/core";
import { DataGridSettingsConfig } from "../Configs/data-grid-settings.config";

@Component({
    selector: "div[data-grid-with-settings]",
    template: `
<div data-grid-toolbar>
<button *ngIf="!settings.isConfigMode" [settings]="settings" switch-mode-to-config></button>
<button *ngIf="settings.isConfigMode" [settings]="settings" switch-mode-to-data></button>
<button [settings]="settings" add-blank-column></button>
</div>
<div *ngIf="settings.isConfigMode" class="panel-body">
        <p>Columns visibility:</p>
        <ul class="list-group">
            <li *ngFor="let column of settings.columns" class="list-group-item">
                <label><input type="checkbox" [(ngModel)]="column.isVisible">{{column.headerText}}</label>
            </li>
        </ul>
</div>
<div *ngIf="!settings.isConfigMode" data-grid>

<table data-grid-table>
    <thead data-grid-header [settings]="settings"></thead>
    <tbody data-grid-body [settings]="settings"></tbody>
</table>

</div>`,
    host: {
        "[class]": "hostCssClass"
    }
})
export class DataGridWithSettingsComponent implements OnInit {
    hostCssClass: string = "panel panel-default";

    private _settings: DataGridSettingsConfig;

    @Input() get settings(): DataGridSettingsConfig {
        if(this._settings == null) this._settings = new DataGridSettingsConfig();
        return this._settings;
    }
    set settings(newSettings:DataGridSettingsConfig){
        this._settings = newSettings;
    }

    ngOnInit(): void {
        console.log("DataGridSettingsComponent init...");
    }
}