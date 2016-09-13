import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ChildComponent} from './Components/child.component';

import {TabsControl} from './Controls/tabs.control'
import {TabControl} from './Controls/tab.control'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, ChildComponent,TabsControl, TabControl],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }