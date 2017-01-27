import { Component, OnInit, Input } from "@angular/core";
import { DataGridSettingsConfig } from "../Configs/data-grid-settings.config";

@Component({
    selector: "tbody[data-grid-body]",
    template: `
<tr *ngFor="let row of settings.renderedRows">
<td *ngFor="let column of settings.renderedColumns">
 <text-cell *ngIf="column.type=='text'" [row]="row" [column]="column"></text-cell>
 <dropdown-cell *ngIf="column.type=='dropdown'" [row]="row" [column]="column"></dropdown-cell>
</td>
</tr>`
})
export class DataGridBodyPart implements OnInit {
    @Input() settings: DataGridSettingsConfig;
    renderZone: string = "Body";

    ngOnInit():void {
        console.log("DataGridBodyPart initiated");
    }
}