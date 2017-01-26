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
    settings: DataGridSettingsConfig;

    constructor() {
        this.settings = new DataGridSettingsConfig();

        let col1: TextColumn = new TextColumn();
        col1.headerText = "col 1";
        col1.internalName = "col1";
        col1.isVisible = true;

        let col2: TextColumn = new TextColumn();
        col2.headerText = "col 2";
        col2.internalName = "col2";
        col2.isVisible = true;

        let col3: TextColumn = new TextColumn();
        col3.headerText = "col 3";
        col3.internalName = "col3";
        col3.isVisible = true;

        let col4: DropdownColumn = new DropdownColumn();
        col4.headerText = "col 4";
        col4.internalName = "col4";
        col4.isVisible = true;

        let col5: DropdownColumn = new DropdownColumn();
        col5.headerText = "col 5";
        col5.internalName = "col5";
        col5.isVisible = true;

        let col6: DropdownColumn = new DropdownColumn();
        col6.headerText = "col 6";
        col6.internalName = "col6";
        col6.isVisible = true;
        
        this.settings.columns.push(col1, col2, col3, col4, col5, col6);

        this.settings.buildRenderedColumns();

    }

}