import { Component } from '@angular/core';

@Component({
    selector: "nav[nav-bar]",
    template: `
<ul>
    <li><a routerLink="/video">Video</a></li>
    <li><a routerLink="/audio">Audio</a></li>
</ul>`
})
export class NavBarComponent
{

}