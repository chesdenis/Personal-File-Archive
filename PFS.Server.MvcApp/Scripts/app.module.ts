import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './cmps/app.component';
import { ChildComponent } from './cmps/child.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ChildComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }