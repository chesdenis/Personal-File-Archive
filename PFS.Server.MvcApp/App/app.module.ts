import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import {AllComponent} from './Components/all.component';
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

import {TabsControl} from './Controls/tabs.control';
import {TabControl} from './Controls/tab.control';

import {ContentFilterControl} from './Controls/Filters/content-filter.control'
import {FiltersOptionControl} from './Controls/Filters/filters-option.control'

import {DatetimePickerControl} from './Controls/Datetimepicker/datetime-picker.control';
import {CalendarControl} from './Controls/Datetimepicker/calendar.control';

import {ImagesGroupPreviewBlankBoxControl} from './Controls/ImagesGroupPreview/BlankBox/images-group-preview.blank-box.control';

import { routing } from './app.routing';
 

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations:
  [
      AppComponent,

      AllComponent,
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
      NavBarZoneControl,

      TabsControl,
      TabControl,

      ContentFilterControl,
      FiltersOptionControl,

      DatetimePickerControl,
      CalendarControl,

      ImagesGroupPreviewBlankBoxControl

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }