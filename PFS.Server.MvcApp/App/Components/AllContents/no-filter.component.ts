import { Component, OnInit } from '@angular/core';
import { DataGridPartsBuilder } from '../../Controls/DataGrid/data-grid-parts.builder';
import { GridHeader } from '../../Controls/DataGrid/Parts/grid.header';

@Component({
    moduleId: module.id,
    selector: 'no-filter-component',
    templateUrl: './no-filter.component.html'
})
export class NoFilterComponent implements OnInit {
    gridPartsBuilder: DataGridPartsBuilder;
    gridHeader: GridHeader;

    constructor() {
        this.gridPartsBuilder = new DataGridPartsBuilder("tagsGridBuilder");
    }

    ngOnInit() {
        console.log("OnInitFired");
        
        this.gridHeader =
            this.gridPartsBuilder
                .setTextColumns("One", "Two", "Three")
                .buildHeader();

    }

    handleClick() {
        this.gridHeader = this.gridPartsBuilder.setTextColumns("Dynamic Change").buildHeader();
    }

    handleClickAdd() {
        this.gridHeader = this.gridPartsBuilder.appendTextColumns("Dynamic Change").buildHeader();
    }
}