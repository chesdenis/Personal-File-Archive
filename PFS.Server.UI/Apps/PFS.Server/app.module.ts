import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ControlsModule } from '../../Controls/controls.module';

import { AppComponent } from './Components/app.component';
import { AppRoutes } from './app.routes';

import { VideoViewComponent } from './Components/Video/video-view.component';
import { AudioViewComponent } from './Components/Audio/audio-view.component';
 
@NgModule({
    imports: [
        BrowserModule,
        ControlsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations:
    [
        AppComponent, VideoViewComponent, AudioViewComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }