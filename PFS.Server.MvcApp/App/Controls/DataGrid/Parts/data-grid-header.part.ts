import { Component, OnInit, Input } from '@angular/core';
import { BaseColumn } from '../Columns/base.column';

@Component({
    selector: "thead[data-grid-header]",
    template: `
<tr>
<th *ngFor="let column of columns | visibleColumnsOnly">
 <text-column *ngIf="column.type=='text'" [config]="column.config"></text-column>
 <dropdown-column *ngIf="column.type=='dropdown'" [config]="column.config"></dropdown-column>
</th>
</tr>`
})
export class DataGridHeaderPart implements OnInit {
    @Input() columns: BaseColumn[];
    
    ngOnInit() {
        console.log("DataGridHeader initiated");
    }
}