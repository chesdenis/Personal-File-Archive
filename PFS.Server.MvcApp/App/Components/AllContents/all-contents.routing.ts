import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AllContentsComponent} from './all-contents.component';
import {ByTagsComponent} from './by-tags.component';
import {ByDatesComponent} from './by-dates.component';
import {ByAlbumsComponent} from './by-albums.component';

export const allContentsRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'All',
        component: AllContentsComponent//,
        //children: [
        //    { path: 'Tags', component: ByTagsComponent },
        //    { path: 'Albums', component: ByAlbumsComponent },
        //    { path: 'Dates', component: ByDatesComponent }
        //]
        //children: [
        //    {
        //        path: '',
        //        children: [
        //            { path: 'Tags', component: ByTagsComponent },
        //            { path: 'Albums', component: ByAlbumsComponent },
        //            { path: 'Dates', component: ByDatesComponent }
        //        ],
        //    }
        //]
    }
]);