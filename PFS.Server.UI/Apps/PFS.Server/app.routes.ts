import { Routes } from '@angular/router';
import { VideoViewComponent } from './Components/Video/video-view.component';
import { AudioViewComponent } from './Components/Audio/audio-view.component';

export const AppRoutes: Routes = [
    { path: 'video', component: VideoViewComponent },
    { path: 'audio', component: AudioViewComponent }
];