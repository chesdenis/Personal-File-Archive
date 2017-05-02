import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataGridComponent } from './Components/data-grid.component';
import { DataGridWithSettingsComponent } from './Components/data-grid-with-settings.component';
import { DataGridBodyPart } from "./Parts/data-grid-body.part";
import { DataGridHeaderPart } from "./Parts/data-grid-header.part";
import { DataGridTablePart } from "./Parts/data-grid-table.part";
import { DataGridToolbarPart } from "./Parts/data-grid-toolbar.part";
import { BaseCellTemplate, DropdownCellTemplate, TextCellTemplate } from "./Templates/cells.templates";
import { BaseColumnTemplate, TextColumnTemplate, DropdownColumnTemplate } from "./Templates/columns.templates";
import { BaseRowsTemplate } from "./Templates/rows.templates";
import { AddBlankColumnButton } from "./Buttons/add-blank-column.button";
import { SwitchModeToConfigButton } from "./Buttons/switch-mode-to-config.button";
import { SwitchModeToDataButton } from "./Buttons/switch-mode-to-data.button";


@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
     declarations:[
        DataGridComponent,
        DataGridWithSettingsComponent,
        DataGridBodyPart,
        DataGridHeaderPart,
        DataGridTablePart,
        DataGridToolbarPart,
        BaseCellTemplate,
        DropdownCellTemplate,
        TextCellTemplate,
        BaseColumnTemplate,
        TextColumnTemplate,
        DropdownColumnTemplate,
        BaseRowsTemplate,
        AddBlankColumnButton,
        SwitchModeToConfigButton,
        SwitchModeToDataButton,
     ], 
      exports:[]
})
export class DataGridModule {

}