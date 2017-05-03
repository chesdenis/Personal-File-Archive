import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NavBarComponent } from './TopNavBar/Components/nav-bar.component';
import { DataGridModule } from "./DataGrid/data-grid.module";


@NgModule({
    imports: [
        CommonModule, RouterModule, FormsModule,
        DataGridModule
    ],
    declarations: [
        NavBarComponent
    ],
    exports: [
        NavBarComponent,
        DataGridModule
    ]
})
export class ControlsModule {

}