import { Component } from '@angular/core';
import {NavBarMenuEntity} from './Controls/NavBar/nav-bar-menu.entity';

@Component({
    moduleId: module.id,
  selector: 'my-app',
  templateUrl:"./app.component.html",
})
export class AppComponent 
{
    rightMenuEntities: NavBarMenuEntity[] = [
        new NavBarMenuEntity("active", "/All", "All", "(current)"),
        new NavBarMenuEntity("active", "/Photos", "Photos", "(current)"),
        new NavBarMenuEntity("active", "/Videos", "Videos", "(current)"),
        new NavBarMenuEntity("active", "/Musics", "Musics", "(current)"),
        new NavBarMenuEntity("active", "/Books", "Books", "(current)"),
        new NavBarMenuEntity("active", "/Documents", "Documents", "(current)"),
        new NavBarMenuEntity("active", "/Others", "Others", "(current)"),
        new NavBarMenuEntity("active", "/Upload", "Upload", "(current)"),
        new NavBarMenuEntity("active", "/Untagged", "Untagged", "(current)"),
        new NavBarMenuEntity("active", "/Settings", "Settings", "(current)")
    ];
}  
