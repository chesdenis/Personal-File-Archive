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

import {CalendarControl} from './Datetimepicker/calendar.control';
import {DatetimePickerControl} from './Datetimepicker/datetime-picker.control';

import {BlankBoxImagePreviewControl} from './ImagePreview/BlankBox/blank-box-image-preview.control';
import {ImageItemControl} from './ImagePreview/BlankBox/image-item.control';

import {BlankBoxImageControl} from './ImagesGroupPreview/BlankBox/blank-box-image.control';
import {ImagesGroupPreviewBlankBoxControl} from './ImagesGroupPreview/BlankBox/images-group-preview.blank-box.control';

import {AnimatedBoxImageControl} from './ImagesGroupPreview/AnimatedBox/animated-box-image.control';
import { ImagesGroupPreviewAnimatedBoxControl } from './ImagesGroupPreview/AnimatedBox/images-group-preview.animated-box.control';

import { DataGridComponent } from './DataGrid/Components/data-grid.component';
import { DataGridWithSettingsComponent } from './DataGrid/Components/data-grid-with-settings.component';

import { DataGridTablePart } from './DataGrid/Parts/data-grid-table.part';
import { DataGridHeaderPart } from './DataGrid/Parts/data-grid-header.part';
import { DataGridBodyPart } from './DataGrid/Parts/data-grid-body.part';
import { DataGridToolbarPart } from './DataGrid/Parts/data-grid-toolbar.part';

import { SwitchModeToConfigButton } from './DataGrid/Buttons/switch-mode-to-config.button';
import { SwitchModeToDataButton } from './DataGrid/Buttons/switch-mode-to-data.button';

import { VisibleColumnsOnlyPipe } from './DataGrid/Pipes/visible-columns-only.pipe';

import { BaseColumn } from './DataGrid/Columns/base.column';
import { DropdownColumn} from './DataGrid/Columns/dropdown.column';
import { TextColumn } from './DataGrid/Columns/text.column';

 
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

        BlankBoxImageControl,
        ImagesGroupPreviewBlankBoxControl,

        AnimatedBoxImageControl,
        ImagesGroupPreviewAnimatedBoxControl,

        CalendarControl,
        DatetimePickerControl,
        ImageItemControl,

        DataGridComponent, DataGridWithSettingsComponent,
        VisibleColumnsOnlyPipe,
        DataGridTablePart, DataGridHeaderPart, DataGridBodyPart,
        DataGridToolbarPart,
        SwitchModeToConfigButton, SwitchModeToDataButton,
        BaseColumn, DropdownColumn, TextColumn

    ],
    exports: [
        NavTopBarControl,
        NavBarZoneControl,
        NavBarHeaderControl,
        NavBarBodyControl,

        ContentFilterControl,
        BlankBoxImagePreviewControl,
        ImageItemControl,

        BlankBoxImageControl,
        ImagesGroupPreviewBlankBoxControl,

        AnimatedBoxImageControl,
        ImagesGroupPreviewAnimatedBoxControl,

        CalendarControl,
        DatetimePickerControl,
        ImageItemControl,


        DataGridComponent, DataGridWithSettingsComponent,
        VisibleColumnsOnlyPipe,
        DataGridTablePart, DataGridHeaderPart, DataGridBodyPart,
        DataGridToolbarPart,
        SwitchModeToConfigButton, SwitchModeToDataButton,
        BaseColumn, DropdownColumn, TextColumn
         
    ]
})
export class ControlsModule { }