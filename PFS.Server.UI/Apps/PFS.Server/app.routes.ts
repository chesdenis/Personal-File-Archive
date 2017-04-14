import { Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found.component';

import { HomeComponent } from './Components/Home/home.component';
import { VideosHomeComponent } from './Components/Videos/videos-home.component';
import { AudiosHomeComponent } from './Components/Audios/audios-home.component';
import { PhotosHomeComponent } from './Components/Photos/photos-home.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'video', component: VideosHomeComponent },
    { path: 'audio', component: AudiosHomeComponent },
    { path: 'photo', component: PhotosHomeComponent },
    { path: '**', component: NotFoundComponent }
];