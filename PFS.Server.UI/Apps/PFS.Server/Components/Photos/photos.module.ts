import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotosHomeComponent } from "./photos-home.component";
import { PhotosByTagsComponent } from "./photos-by-tags.component";
import { PhotosByDatesComponent } from './photos-by-dates.component';
import { PhotosByNamesComponent } from './photos-by-names.component';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        PhotosRoutingModule
    ],
    declarations:[
        PhotosHomeComponent,
        PhotosByTagsComponent, PhotosByDatesComponent, PhotosByNamesComponent,
        PhotoDetailComponent
    ],
    providers:[]
})
export class PhotosModule {}