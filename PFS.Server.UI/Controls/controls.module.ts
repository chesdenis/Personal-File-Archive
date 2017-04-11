import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NavBarComponent } from './TopNavBar/Components/nav-bar.component'

@NgModule({
    imports: [
        CommonModule, RouterModule, FormsModule
    ],
    declarations: [
        NavBarComponent
    ],
    exports: [
        NavBarComponent
    ]
})
export class ControlsModule
{

}