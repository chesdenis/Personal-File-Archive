import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AllContentsComponent } from './all-contents.component';
import { ByDefaultComponent } from './by-default.component';
import { ByTagsComponent } from './by-tags.component';
import { ByDatesComponent } from './by-dates.component';
import { ByAlbumsComponent } from './by-albums.component';

const moduleRoutes: Routes = [
    { path: '', redirectTo: '/All', pathMatch: 'full' },
    {
        path: 'All', component: AllContentsComponent,
        children: [
            {path: '', component: ByDefaultComponent},
            {path:'Tags', component:ByTagsComponent},
            {path:'Albums', component:ByAlbumsComponent},
            {path:'Dates', component:ByDatesComponent}
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
        ByDefaultComponent,
        ByTagsComponent,
        ByDatesComponent,
        ByAlbumsComponent
    ]
})
export class AllContentsModule { }