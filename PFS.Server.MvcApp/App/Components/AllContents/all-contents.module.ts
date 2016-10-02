import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AllContentsComponent } from './all-contents.component';
import { ByTagsComponent } from './by-tags.component';
import { ByDatesComponent } from './by-dates.component';
import { NoFilterComponent } from './no-filter.component';

import {ContentFilterControl} from '../../Controls/Filters/content-filter.control';

const moduleRoutes: Routes = [
    
    {
        path: '', component: AllContentsComponent,
        children: [
            { path: '', redirectTo: "/All/Default", pathMatch: 'full' },
            {path: 'Default', component:NoFilterComponent},
            {path:'Tags', component:ByTagsComponent},
            { path: 'Dates', component: ByDatesComponent }
        ]
    }
 
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(moduleRoutes)
    ],
    declarations: [
        AllContentsComponent,
        NoFilterComponent,
        ByTagsComponent,
        ByDatesComponent,
        ContentFilterControl
    ]
})
export class AllContentsModule { }