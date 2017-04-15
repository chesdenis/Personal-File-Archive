import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosHomeComponent }    from './photos-home.component';
import { PhotosByTagsComponent }  from './photos-by-tags.component';
import { PhotosByNamesComponent }  from './photos-by-names.component';
import { PhotosByDatesComponent }  from './photos-by-dates.component';
import { PhotoDetailComponent } from './photo-detail.component';


const photoRoutes: Routes = [
  { path: 'photo',  component: PhotosHomeComponent },

  { path: 'photo/tags', component: PhotosByTagsComponent },
  { path: 'photo/tags/:viewId', component: PhotosByTagsComponent },
  { path: 'photo/tags/:viewId/:entityId', component: PhotoDetailComponent },

  { path: 'photo/dates', component: PhotosByDatesComponent },
  { path: 'photo/dates/:viewId', component: PhotosByDatesComponent },
  { path: 'photo/dates/:viewId/:entityId', component: PhotoDetailComponent },

  { path: 'photo/names', component: PhotosByNamesComponent },
  { path: 'photo/names/:viewId', component: PhotosByNamesComponent },
  
  { path: 'photo/:entityId', component: PhotoDetailComponent },
  { path: 'photo/tag/:tagId', component: PhotosByTagsComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(photoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosRoutingModule { }
