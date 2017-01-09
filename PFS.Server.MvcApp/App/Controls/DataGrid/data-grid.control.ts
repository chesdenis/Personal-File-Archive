import { Component } from '@angular/core';
import { IBaseColumn } from './columns/base.column';

@Component({
    moduleId: module.id,
    selector: "data-grid",
    templateUrl: "./data-grid.control.html"
})
export class DataGridControl {
    Columns: IBaseColumn[] = [];

    includeColumn(column: IBaseColumn) {
        this.Columns.push(column);
    }
}