import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NavBarComponent } from './TopNavBar/Components/nav-bar.component';

import { DataGridComponent } from './DataGrid/Components/data-grid.component';
import { DataGridWithSettingsComponent } from './DataGrid/Components/data-grid-with-settings.component';
import { DataGridBodyPart } from "./DataGrid/Parts/data-grid-body.part";
import { DataGridHeaderPart } from "./DataGrid/Parts/data-grid-header.part";
import { DataGridTablePart } from "./DataGrid/Parts/data-grid-table.part";
import { DataGridToolbarPart } from "./DataGrid/Parts/data-grid-toolbar.part";
import { BaseCellTemplate, DropdownCellTemplate, TextCellTemplate } from "./DataGrid/Templates/cells.templates";
import { BaseColumnTemplate, TextColumnTemplate, DropdownColumnTemplate } from "./DataGrid/Templates/columns.templates";
import { BaseRowsTemplate } from "./DataGrid/Templates/rows.templates";
import { AddBlankColumnButton } from "./DataGrid/Buttons/add-blank-column.button";
import { SwitchModeToConfigButton } from "./DataGrid/Buttons/switch-mode-to-config.button";
import { SwitchModeToDataButton } from "./DataGrid/Buttons/switch-mode-to-data.button";

@NgModule({
    imports: [
        CommonModule, RouterModule, FormsModule
    ],
    declarations: [
        NavBarComponent,

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
    exports: [
        NavBarComponent,

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
    ]
})
export class ControlsModule {

}