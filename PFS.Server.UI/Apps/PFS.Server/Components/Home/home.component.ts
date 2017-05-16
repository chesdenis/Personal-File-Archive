import { Component, OnInit } from '@angular/core';
import { DataGridSettingsConfig, DataGridRowsOptions, DataGridColumnsOptions } from 'Controls/DataGrid/Configs/data-grid-settings.config';
import { TextColumnTemplate, columnTypes } from "Controls/DataGrid/Templates/columns.templates";
import { HomeService } from './home.service';

@Component({
    moduleId: module.id,
    template: `<p>Home</p>
    <button type="button" class="btn btn-default" (click)="refreshDataGrid()">Refresh</button>
     <button type="button" class="btn btn-default" (click)="exampleUsingGrid()">exampleUsingGrid</button>
    <div data-grid-with-settings [settings]="a"></div>`
})
export class HomeComponent implements OnInit {
    a: DataGridSettingsConfig;

    contentSources: any[];

    constructor(protected homeService: HomeService) {

    };

    ngOnInit(): void {
        this.a = new DataGridSettingsConfig();

        let b: TextColumnTemplate = new TextColumnTemplate();
        b.headerText = 'Name';
        b.isVisible = true;
        b.internalName = 'Name';

        let c: TextColumnTemplate = new TextColumnTemplate();
        c.headerText = 'Drive name';
        c.isVisible = true;
        c.internalName = 'DriveName';

        let d: TextColumnTemplate = new TextColumnTemplate();
        d.headerText = 'Path';
        d.isVisible = true;
        d.internalName = 'Path';

        this.a.columns.push(b, c, d);

        this.a.buildRenderedColumns();
        //this.a.columns.push();
        console.log('Home component on init..');

    }

    refreshDataGrid(): void {
        console.log('refreshed...');
        this.homeService.getContentSources().then(contentSources => {
            this.contentSources = contentSources;
            this.a.rows = this.contentSources;
            this.a.buildRenderedRows();
        });
    }

    exampleUsingGrid(){
        let gridColumnsOptions = new DataGridColumnsOptions();
        let gridRowsOptions = new DataGridRowsOptions();

        gridColumnsOptions.addColumn("Name");
        gridColumnsOptions.addColumn("DriveName", "Drive Name");
        gridColumnsOptions.addColumn("Path");
        gridColumnsOptions.addColumn("Id", "Id", true);
        gridColumnsOptions.addColumn("DropDownColumn", "Drop down column", true,  columnTypes.dropdown);

        
        this.homeService.getContentSources().then(contentSources =>{
            gridRowsOptions.setData(contentSources);
        });
        
    }

}