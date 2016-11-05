import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../../Controls/controls.module';

import { AllContentsComponent } from './all-contents.component';
import { ByTagsComponent } from './by-tags.component';
import { ByDatesComponent } from './by-dates.component';
import { NoFilterComponent } from './no-filter.component';

import { AllContentsService } from './all-contents.service';

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
        RouterModule.forChild(moduleRoutes),
        ControlsModule
    ],
    declarations: [
        AllContentsComponent,
        NoFilterComponent,
        ByTagsComponent,
        ByDatesComponent
    ],
    providers: [
        AllContentsService
    ]
})
export class AllContentsModule { }