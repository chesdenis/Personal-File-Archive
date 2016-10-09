import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../../Controls/controls.module';

import { DocumentsComponent } from './documents.component';
import { ByTagsComponent } from './by-tags.component';
import { ByDatesComponent } from './by-dates.component';
import { NoFilterComponent } from './no-filter.component';

const moduleRoutes: Routes = [
    
    {
        path: '', component: DocumentsComponent,
        children: [
            { path: '', redirectTo: "/Documents/Default", pathMatch: 'full' },
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
        DocumentsComponent,
        NoFilterComponent,
        ByTagsComponent,
        ByDatesComponent
    ]
})
export class DocumentsModule { }