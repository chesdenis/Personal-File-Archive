import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppComponent }  from './app.component';

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

import {NavTopBarControl} from './Controls/nav-bar/nav-top-bar.control';
import {NavBarZoneControl} from './Controls/nav-bar/nav-bar-zone.control';
import {NavBarHeaderControl} from './Controls/nav-bar/nav-bar-header.control';
import {NavBarBodyControl} from './Controls/nav-bar/nav-bar-body.control';

import { appRouting } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        appRouting
    ],
  declarations:
  [
      AppComponent,

      AllContentsComponent,
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