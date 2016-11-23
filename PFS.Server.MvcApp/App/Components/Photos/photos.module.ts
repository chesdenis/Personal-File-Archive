import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../../Controls/controls.module';

import { PhotosComponent } from './photos.component';

import { ByTagsComponent } from './by-tags.component';
import { ByAlbumsComponent } from './by-albums.component';
import { ByDatesComponent } from './by-dates.component';
import { ByPlacesComponent } from './by-places.component';
import { NoFilterComponent } from './no-filter.component';

import { PhotosService } from './photos.service';

const moduleRoutes: Routes = [

    {
        path: '', component: PhotosComponent,
        children: [
            { path: '', redirectTo: "/Photos/Default", pathMatch: 'full' },
            { path: 'Default', component: NoFilterComponent },
            { path: 'Tags', component: ByTagsComponent },
            { path: 'Albums', component: ByAlbumsComponent },
            { path: 'Dates', component: ByDatesComponent },
            { path: 'Places', component: ByPlacesComponent }
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
        PhotosComponent,
        NoFilterComponent,
        ByTagsComponent,
        ByAlbumsComponent,
        ByDatesComponent,
        ByPlacesComponent
    ],
    providers: [
        PhotosService
    ]
})
export class PhotosModule { }