import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosHomeComponent }    from './videos-home.component';
import { VideosByTagsComponent }  from './videos-by-tags.component';
import { VideosByNamesComponent }  from './videos-by-names.component';
import { VideosByDatesComponent }  from './videos-by-dates.component';
import { VideoDetailComponent } from './video-detail.component';

const videoRoutes: Routes = [
  { path: 'video',  component: VideosHomeComponent },

  { path: 'video/tags', component: VideosByTagsComponent },
  { path: 'video/dates', component: VideosByDatesComponent },
  { path: 'video/names', component: VideosByNamesComponent },  
  { path: 'video/:entityId', component: VideoDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(videoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VideosRoutingModule { }
