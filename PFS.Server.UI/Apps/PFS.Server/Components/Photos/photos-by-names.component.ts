import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    template: `<p>Photos By Names</p>
    <p>Switch view Mode:</p>
     <ul>
    <li><a routerLink="/photo/names/grid">Grid</a></li>
    <li><a routerLink="/photo/names/tiled">Tiled</a></li>
</ul>
 <p>Goto Item:</p>
  <ul>
    <li><a routerLink="/photo/USDDDJJF">Item USDDDJJF</a></li>
    <li><a routerLink="/photo/ASDHVNKX">Item ASDHVNKX</a></li>
</ul>
`
})
export class PhotosByNamesComponent
{
    constructor(private router: Router, private r:ActivatedRoute){}
}