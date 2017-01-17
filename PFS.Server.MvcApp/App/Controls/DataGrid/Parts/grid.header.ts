import { Component } from '@angular/core';
import { BaseColumn } from '../columns/base.column';
import { DataGridControl } from '../data-grid.control';
 
export class GridHeader {
    Columns: BaseColumn[] = [];
    RenderedColumns: BaseColumn[] = [];
    
    includeColumn(column: BaseColumn) {
        this.Columns.push(column);
    }

    prepareRender() {
        this.RenderedColumns = [];

        this.RenderedColumns = this.Columns.filter(item => item.isVisible==true);
    }
}