import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    template: `<p>Videos By Names</p>
    <p>Switch view Mode:</p>
     <ul>
    <li><a routerLink="/video/names" [queryParams]="{viewMode:1}">Grid</a></li>
    <li><a routerLink="/video/names" [queryParams]="{viewMode:2}">Tiled</a></li>
</ul>
 <p>Goto Item:</p>
  <ul>
    <li><a routerLink="./USDDDJJF">Item USDDDJJF</a></li>
    <li><a routerLink="./ASDHVNKX">Item ASDHVNKX</a></li>
</ul>
`
})
export class VideosByNamesComponent
{
    constructor(private router: Router, private r:ActivatedRoute){}
}