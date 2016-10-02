import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { RouterModule } from '@angular/router';

import {NavTopBarControl} from './NavBar/nav-top-bar.control';
import {NavBarZoneControl} from './NavBar/nav-bar-zone.control';
import {NavBarHeaderControl} from './NavBar/nav-bar-header.control';
import {NavBarBodyControl} from './NavBar/nav-bar-body.control';

import {ContentFilterControl} from './Filters/content-filter.control';
import {FilterOptionEntity} from './Filters/filter-option-entity';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [

        NavTopBarControl,
        NavBarZoneControl,
        NavBarHeaderControl,
        NavBarBodyControl,

        ContentFilterControl
       
    ],
    exports: [
        NavTopBarControl,
        NavBarZoneControl,
        NavBarHeaderControl,
        NavBarBodyControl,

        ContentFilterControl
    ]
})
export class ControlsModule { }