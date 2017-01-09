import { Component } from '@angular/core';
import { IBaseColumn } from './base.column';
import { DataGridControl } from '../data-grid.control';

@Component({
    moduleId: module.id,
    selector: "text-column",
    templateUrl:"./text.column.html"
})
export class TextColumn implements IBaseColumn {

    headerText: string = "SampleHeaderText";

    constructor(dataGrid: DataGridControl) {
        dataGrid.includeColumn(this);
    }
}