import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {BooksComponent} from './Components/books.component';
import {DocumentsComponent} from './Components/documents.component';
import {MusicsComponent} from './Components/musics.component';
import {OthersComponent} from './Components/others.component';
import {PhotosComponent} from './Components/photos.component';
import {UntaggedComponent} from './Components/untagged.component';
import {UploadComponent} from './Components/upload.component';
import {VideosComponent} from './Components/videos.component';
import {SettingsComponent} from './Components/settings.component';

import {NavTopBarControl} from './Controls/nav-bar/nav-top-bar.control';
import {NavBarZoneControl} from './Controls/nav-bar/nav-bar-zone.control';
import {NavBarHeaderControl} from './Controls/nav-bar/nav-bar-header.control';
import {NavBarBodyControl} from './Controls/nav-bar/nav-bar-body.control';

const rootRoutes: Routes = [
    //TODO: redirectTo not working here - check in future releases
    { path: '',loadChildren:"app/components/AllContents/all-contents.module#AllContentsModule" },
    { path: 'All', loadChildren:"app/components/AllContents/all-contents.module#AllContentsModule" },
    // { path: 'Books', component: BooksComponent },
    // { path: 'Documents', component: DocumentsComponent },
    // { path: 'Musics', component: MusicsComponent },
    // { path: 'Others', component: OthersComponent },
    { path: 'Photos', component: PhotosComponent },
    // { path: 'Untagged', component: UntaggedComponent },
    // { path: 'Upload', component: UploadComponent },
    // { path: 'Videos', component: VideosComponent },
    // { path: 'Settings', component: SettingsComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes)
    ],
  declarations:
  [
      AppComponent,
      
      BooksComponent,
      DocumentsComponent,
      MusicsComponent,
      OthersComponent,
      PhotosComponent,
      UntaggedComponent,
      UploadComponent,
      VideosComponent,
      SettingsComponent,

      NavTopBarControl,
      NavBarHeaderControl,
      NavBarBodyControl,
      NavBarZoneControl
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }