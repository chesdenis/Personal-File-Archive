import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

import {AllComponent} from './Components/AllComponent/all.component';
import {BooksComponent} from './Components/books.component';
import {DocumentsComponent} from './Components/documents.component';
import {MusicsComponent} from './Components/musics.component';
import {OthersComponent} from './Components/others.component';
import {PhotosComponent} from './Components/photos.component';
import {UntaggedComponent} from './Components/untagged.component';
import {UploadComponent} from './Components/upload.component';
import {VideosComponent} from './Components/videos.component';
import {SettingsComponent} from './Components/settings.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/All', pathMatch: 'full' },
    { path: 'All', component: AllComponent },
    { path: 'Books', component: BooksComponent },
    { path: 'Documents', component: DocumentsComponent },
    { path: 'Musics', component: MusicsComponent },
    { path: 'Others', component: OthersComponent },
    { path: 'Photos', component: PhotosComponent },
    { path: 'Untagged', component: UntaggedComponent },
    { path: 'Upload', component: UploadComponent },
    { path: 'Videos', component: VideosComponent },
    { path: 'Settings', component: SettingsComponent },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);