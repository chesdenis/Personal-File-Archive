import { Component, OnInit } from '@angular/core';
import { DataGridSettingsConfig } from 'Controls/DataGrid/Configs/data-grid-settings.config';
import { TextColumnTemplate } from "Controls/DataGrid/Templates/columns.templates";
import {HomeService} from './home.service';

@Component({
    moduleId: module.id,
    template: `<p>Home</p>
    <div data-grid-with-settings [settings]="a"></div>`
})
export class HomeComponent implements OnInit {
    a: DataGridSettingsConfig;

    constructor(protected homeService: HomeService){
     
    };

    ngOnInit(): void {
        this.a = new DataGridSettingsConfig();
        
        let b:TextColumnTemplate = new TextColumnTemplate();
        b.headerText = 'La-la-la';
        b.isVisible = true;
        b.internalName = 'ururu';

        let c:TextColumnTemplate = new TextColumnTemplate();
        c.headerText = 'Denis';
        c.isVisible = true;
        c.internalName = 'theBest';

        let d:TextColumnTemplate = new TextColumnTemplate();
        d.headerText = 'Anuta';
        d.isVisible = true;
        d.internalName = 'kokoko';

        this.a.columns.push(b,c,d);

        this.a.buildRenderedColumns();       
        //this.a.columns.push();
        console.log('Home component on init..');

        console.log(this.homeService.getContentSources());
    }
}