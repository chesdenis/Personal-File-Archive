import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllContentsComponent} from './all-contents.component';
import {ByTagsComponent} from './by-tags.component';
import {ContentFilterControl} from '../../Controls/Filters/content-filter.control';
import {allContentsRouting} from './all-contents.routing';

@NgModule({
    imports: [],
    declarations: [
        AllContentsComponent,
        ByTagsComponent,

        ContentFilterControl
    ]
})
export class AllContentsModule { }