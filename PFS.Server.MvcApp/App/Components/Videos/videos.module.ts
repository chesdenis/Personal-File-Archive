import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideosComponent} from './videos.component';
import { ControlsModule } from '../../Controls/controls.module';

import {Routes, RouterModule} from '@angular/router';

import { ByTagsComponent } from './by-tags.component';
import { ByAlbumsComponent } from './by-albums.component';
import { ByDatesComponent } from './by-dates.component';
import { ByPlacesComponent } from './by-places.component';
import { NoFilterComponent } from './no-filter.component';


const moduleRoutes: Routes = [
    {
        path:'', component: VideosComponent,
        children:[
            {path:'', redirectTo:"/Videos/Default", pathMatch: "full"},
            { path: 'Default', component: NoFilterComponent },
            { path: 'Tags', component: ByTagsComponent },
            { path: 'Albums', component: ByAlbumsComponent },
            { path: 'Dates', component: ByDatesComponent },
            { path: 'Places', component: ByPlacesComponent }
        ]
    }
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(moduleRoutes),
        ControlsModule
    ],
    declarations:[
        VideosComponent,

        NoFilterComponent,
        ByTagsComponent,
        ByAlbumsComponent,
        ByDatesComponent,
        ByPlacesComponent,

    ]
})
export class VideosModule{

}