import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

const rootRoutes: Routes = [
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes)
    ],
  declarations:
  [
      AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }