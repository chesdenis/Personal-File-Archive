import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllContentsComponent} from './all-contents.component';
import {ByTagsComponent} from './by-tags.component';
import {ByDatesComponent} from './by-dates.component';
import {ByAlbumsComponent} from './by-albums.component';

import { allContentsRouting} from './all-contents.routing';
import {ContentFilterControl} from '../../Controls/Filters/content-filter.control';


@NgModule({
    imports: [CommonModule, allContentsRouting],
    declarations: [
        AllContentsComponent,
        ByTagsComponent,
        ByDatesComponent,
        ByAlbumsComponent,
        ContentFilterControl
    ]
})
export class AllContentsModule { }