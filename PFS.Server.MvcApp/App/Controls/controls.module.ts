import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {NavTopBarControl} from './NavBar/nav-top-bar.control';
import {NavBarZoneControl} from './NavBar/nav-bar-zone.control';
import {NavBarHeaderControl} from './NavBar/nav-bar-header.control';
import {NavBarBodyControl} from './NavBar/nav-bar-body.control';

import {ContentFilterControl} from './Filters/content-filter.control';
import {FilterOptionEntity} from './Filters/filter-option-entity';

import {BlankBoxImagePreviewControl} from './ImagePreview/BlankBox/blank-box-image-preview.control';
import {ImageItemControl} from './ImagePreview/BlankBox/image-item.control';

import {TypeaheadControl} from "./Typeahead/typeahead.control";
import {SearchInputControl} from "./Typeahead/search-input.control";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [

        NavTopBarControl,
        NavBarZoneControl,
        NavBarHeaderControl,
        NavBarBodyControl,

        ContentFilterControl,
        BlankBoxImagePreviewControl,
        ImageItemControl,
        TypeaheadControl,
        SearchInputControl
       
    ],
    exports: [
        NavTopBarControl,
        NavBarZoneControl,
        NavBarHeaderControl,
        NavBarBodyControl,

        ContentFilterControl,
        BlankBoxImagePreviewControl,
        ImageItemControl,
        TypeaheadControl,
        SearchInputControl
    ]
})
export class ControlsModule { }