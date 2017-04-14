import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './Components/not-found.component';

import { HomeComponent } from './Components/Home/home.component';
import { AudiosHomeComponent } from './Components/Audios/audios-home.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'audio', component: AudiosHomeComponent },
   
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}