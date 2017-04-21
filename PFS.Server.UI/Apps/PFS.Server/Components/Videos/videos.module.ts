import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideosHomeComponent } from "./videos-home.component";
import { VideosByTagsComponent } from "./videos-by-tags.component";
import { VideosByDatesComponent } from './videos-by-dates.component';
import { VideosByNamesComponent } from './videos-by-names.component';
import { VideoDetailComponent } from './video-detail.component';
import { VideosRoutingModule } from './videos-routing.module';
import { VideoService } from './video.service';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        VideosRoutingModule
    ],
    declarations:[
        VideosHomeComponent,
        VideosByTagsComponent, VideosByDatesComponent, VideosByNamesComponent,
        VideoDetailComponent
    ],
    providers: [
        VideoService
    ]
})
export class VideosModule {}