import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

import {AllContentsComponent} from './Components/AllContents/all-contents.component';
import {BooksComponent} from './Components/books.component';
import {DocumentsComponent} from './Components/documents.component';
import {MusicsComponent} from './Components/musics.component';
import {OthersComponent} from './Components/others.component';
import {PhotosComponent} from './Components/photos.component';
import {UntaggedComponent} from './Components/untagged.component';
import {UploadComponent} from './Components/upload.component';
import {VideosComponent} from './Components/videos.component';
import {SettingsComponent} from './Components/settings.component';

const allContentsRoutes: Routes = [
    {
        path: 'all',
        loadChildren: 'App/Components/AllContents/all-contents.module#AllContentsModule'
    }
];

const rootRoutes: Routes = [
    { path: '', redirectTo: '/all', pathMatch: 'full' },
    { path: 'all', component: AllContentsComponent },
    { path: 'books', component: BooksComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'musics', component: MusicsComponent },
    { path: 'others', component: OthersComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'untagged', component: UntaggedComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'settings', component: SettingsComponent },
];

const appRoutes: Routes = [
    ...allContentsRoutes,
    ...rootRoutes
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);