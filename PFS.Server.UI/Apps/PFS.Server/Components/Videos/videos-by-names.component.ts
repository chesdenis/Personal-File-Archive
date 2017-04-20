import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import "jaydata/odata";
import { type, factory, PFS, Default, $data } from "../../../../Contexts/JayDataContext";


@Component({
    moduleId: module.id,
    template: `<p>Videos By Names</p>
    <p>Switch view Mode:</p>
     <ul>
    <li><a routerLink="/video/names" [queryParams]="{viewMode:1}">Grid</a></li>
    <li><a routerLink="/video/names" [queryParams]="{viewMode:2}">Tiled</a></li>
</ul>
<video width="320" height="240" controls>
  <source src="/diskD/80 (18).mp4" type="video/mp4">
</video>
<p *ngFor="let video of viewData">{{video.Name}}</p>
 <p>Goto Item:</p>
  <ul>
    <li><a routerLink="./USDDDJJF">Item USDDDJJF</a></li>
    <li><a routerLink="./ASDHVNKX">Item ASDHVNKX</a></li>
</ul>
`
})
export class VideosByNamesComponent implements OnInit {

    viewData: PFS.Server.Core.Entities.Video[] = [];

    constructor(private router: Router, private r: ActivatedRoute) { }

    getVideos() {

        factory({}).onReady().then((dbCtx) => {
            return dbCtx.Videos.filter((it)=>{ return it.Name == "test"; }).take(2).toArray();
        }).then((videos) => {
            this.viewData = videos;
        });
    }

    ngOnInit(): void {
        this.getVideos();
    }
}