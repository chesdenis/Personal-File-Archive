import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AllContentsComponent } from './all-contents.component';
import { ByTagsComponent } from './by-tags.component';
import { ByDatesComponent } from './by-dates.component';
import { ByAlbumsComponent } from './by-albums.component';

const moduleRoutes: Routes = [
    {
        path: '',
        component: AllContentsComponent,
        children: [
             { path: 'Tags', component: ByTagsComponent }
        //     {
        //         path: '', 
        //         children: [
        //             { path: 'Tags', component: ByTagsComponent },
        //             { path: 'Albums', component: ByAlbumsComponent },
        //             { path: 'Dates', component: ByDatesComponent }]
        //     }

        ]
    }
];

// const moduleRoutes: Routes = [
//     { path: 'All', component: AllContentsComponent },
//     { path: 'Tags', component: ByTagsComponent },
//     { path: 'Albums', component: ByAlbumsComponent },
//     { path: 'Dates', component: ByDatesComponent }
// ];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(moduleRoutes)
    ],
    declarations: [
        AllContentsComponent,
        ByTagsComponent,
        ByDatesComponent,
        ByAlbumsComponent
    ]
})
export class AllContentsModule { }