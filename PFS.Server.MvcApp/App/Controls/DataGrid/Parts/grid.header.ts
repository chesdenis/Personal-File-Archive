import { Component } from '@angular/core';
import { BaseColumn } from '../columns/base.column';
import { DataGridControl } from '../data-grid.control';
 
export class GridHeader {
    Columns: BaseColumn[] = [];
    
    includeColumn(column: BaseColumn) {
        this.Columns.push(column);
    }
}