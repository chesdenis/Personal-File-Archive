import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ControlsModule } from '../../Controls/controls.module';

import { AppComponent } from './Components/app.component';
import { AppRoutes } from './app.routes';

import { NotFoundComponent } from './Components/not-found.component';
import { HomeComponent } from './Components/Home/home.component';
import { VideosHomeComponent } from './Components/Videos/videos-home.component';
import { AudiosHomeComponent } from './Components/Audios/audios-home.component';
import { PhotosHomeComponent } from './Components/Photos/photos-home.component'; 

@NgModule({
    imports: [
        BrowserModule,
        ControlsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations:
    [
        AppComponent, 
        VideosHomeComponent, AudiosHomeComponent, PhotosHomeComponent,
        HomeComponent, NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }