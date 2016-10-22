import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsModule } from './Controls/controls.module';

import { AppComponent }  from './app.component';

import {DocumentsComponent} from './Components/documents.component';
import {MusicsComponent} from './Components/musics.component';
import {BooksComponent} from './Components/books.component';
import {OthersComponent} from './Components/others.component';
import {UntaggedComponent} from './Components/untagged.component';
import {UploadComponent} from './Components/upload.component';
import {VideosComponent} from './Components/videos.component';
import {SettingsComponent} from './Components/settings.component';


const rootRoutes: Routes = [
    //TODO: redirectTo not working here - check in future releases
    { path: '',loadChildren:"app/components/AllContents/all-contents.module#AllContentsModule" },
    { path: 'All', loadChildren:"app/components/AllContents/all-contents.module#AllContentsModule" },
    { path: 'Books', loadChildren: "app/components/Books/books.module#BooksModule" },
    { path: 'Documents', loadChildren:"app/components/Documents/documents.module#DocumentsModule" },
    { path: 'Musics', loadChildren: "app/components/Musics/musics.module#MusicsModule" },
    // { path: 'Others', component: OthersComponent },
    { path: 'Photos', loadChildren: "app/components/Photos/photos.module#PhotosModule" },
    // { path: 'Untagged', component: UntaggedComponent },
    // { path: 'Upload', component: UploadComponent },
    // { path: 'Videos', component: VideosComponent },
    // { path: 'Settings', component: SettingsComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes),
        ControlsModule
    ],
  declarations:
  [
      AppComponent,
      
      DocumentsComponent,
      MusicsComponent,
      BooksComponent,
      OthersComponent,
      UntaggedComponent,
      UploadComponent,
      VideosComponent,
      SettingsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }