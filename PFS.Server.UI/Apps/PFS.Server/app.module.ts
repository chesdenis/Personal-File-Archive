import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './Components/app.component';
 
@NgModule({
    imports: [
        BrowserModule
    ],
  declarations:
  [
      AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }