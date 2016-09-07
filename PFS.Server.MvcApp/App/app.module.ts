import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ChildComponent} from './Components/child.component';
import {DropdownControl} from './Controls/dropdown.control';
import {DropdownOptionControl} from './Controls/dropdown-option.control';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, ChildComponent, DropdownControl, DropdownOptionControl ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }