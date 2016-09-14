import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ChildComponent} from './Components/child.component';
import {DatetimePickerControl} from './Controls/Datetimepicker/datetime-picker.control';
import {CalendarControl} from './Controls/Datetimepicker/calendar.control';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, ChildComponent, DatetimePickerControl, CalendarControl ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }