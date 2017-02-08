import { Component, OnInit } from '@angular/core';
import {
    BaseColumnTemplate,
    TextColumnTemplate,
    DropdownColumnTemplate
} from '../../Controls/DataGrid/Templates/columns.templates';
 
import { DataGridSettingsConfig } from '../../Controls/DataGrid/Configs/data-grid-settings.config';
import { BooksService } from "./books.service";

@Component({
    moduleId: module.id,
    selector: 'no-filter-component',
    templateUrl: './no-filter.component.html'
})
export class NoFilterComponent implements OnInit {
    settings: DataGridSettingsConfig = new DataGridSettingsConfig();

    constructor(private dataService: BooksService) {
    }

    ngOnInit(): void {

        this.dataService.getTagsGridConfig().then(settings => {
            this.settings = settings;
        });
    }

}