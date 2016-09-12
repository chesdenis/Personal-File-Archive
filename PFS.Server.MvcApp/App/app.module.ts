import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ChildComponent} from './Components/child.component';

import {ContentFilterControl} from './Controls/Filters/content-filter.control'
import {FiltersOptionControl} from './Controls/Filters/filters-option.control'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, ChildComponent, ContentFilterControl, FiltersOptionControl ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }