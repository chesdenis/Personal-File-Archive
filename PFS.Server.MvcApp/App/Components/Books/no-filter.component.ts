import { Component } from '@angular/core';
import { BaseColumn } from '../../Controls/DataGrid/Columns/base.column';
import { TextColumn } from '../../Controls/DataGrid/Columns/text.column';
import { DropdownColumn } from '../../Controls/DataGrid/Columns/dropdown.column';
import { DataGridSettingsConfig } from '../../Controls/DataGrid/Configs/data-grid-settings.config';

@Component({
    moduleId: module.id,
    selector: 'no-filter-component',
    templateUrl: './no-filter.component.html'
})
export class NoFilterComponent {
    columns: BaseColumn[] = [];
    rows: any[] = [];
    settings: DataGridSettingsConfig = {
        isConfigMode: false,
        columns: this.columns
    } 

    constructor() {
        let col1: TextColumn = new TextColumn();
        col1.config.headerText = "col 1";
        col1.config.internalName = "col1";
        col1.config.isVisible = true;

        let col2: TextColumn = new TextColumn();
        col2.config.headerText = "col 2";
        col2.config.internalName = "col2";
        col2.config.isVisible = true;

        let col3: TextColumn = new TextColumn();
        col3.config.headerText = "col 3";
        col3.config.internalName = "col3";
        col3.config.isVisible = true;

        let col4: DropdownColumn = new DropdownColumn();
        col4.config.headerText = "col 4";
        col4.config.internalName = "col4";
        col4.config.isVisible = true;

        let col5: DropdownColumn = new DropdownColumn();
        col5.config.headerText = "col 5";
        col5.config.internalName = "col5";
        col5.config.isVisible = true;

        let col6: DropdownColumn = new DropdownColumn();
        col6.config.headerText = "col 6";
        col6.config.internalName = "col6";
        col6.config.isVisible = true;
        
        this.columns.push(col1, col2, col3, col4, col5, col6);

    }

}