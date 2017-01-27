import { Component, OnInit, Input } from "@angular/core";
import { DataGridSettingsConfig } from "../Configs/data-grid-settings.config";

@Component({
    selector: "thead[data-grid-header]",
    template: `
<tr>
<th *ngFor="let column of settings.renderedColumns">

 <text-column *ngIf="column.type=='text'" 
[internalName]="column.internalName" 
[headerText]="column.headerText" 
[isVisible]="column.isVisible"></text-column>

 <dropdown-column *ngIf="column.type=='dropdown'"  
[internalName]="column.internalName" 
[headerText]="column.headerText" 
[isVisible]="column.isVisible"></dropdown-column>

</th>
</tr>`
})
export class DataGridHeaderPart implements OnInit {
    @Input() settings: DataGridSettingsConfig;
    renderZone: string = "Header";

    ngOnInit():void {
        console.log("DataGridHeader initiated");
    }
}