import { Component } from '@angular/core';

@Component({
    selector: "nav[nav-bar]",
    template: `
<ul>
    <li><a routerLink="/home">Home</a></li>
    <li><a routerLink="/video">Video</a></li>
    <li><a routerLink="/audio">Audio</a></li>
    <li><a routerLink="/photo">Photo</a></li>
</ul>`
})
export class NavBarComponent
{

}