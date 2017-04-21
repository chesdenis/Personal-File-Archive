import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from './video.service'

import "jaydata/odata";
import { type, factory, PFS, Default, $data } from "../../../../Contexts/JayDataContext";

//<video width="320" height= "240" controls>
//    <source src="/diskD/80 (18).mp4" type= "video/mp4" >
//        </video>
//        < p * ngFor="let video of viewData" > {{video.Name }}</p>

@Component({
    moduleId: module.id,
    template: `<p>Videos By Names</p>
    <p>Switch view Mode:</p>
     <ul>
    <li><a routerLink="/video/names" [queryParams]="{viewMode:1}">Grid</a></li>
    <li><a routerLink="/video/names" [queryParams]="{viewMode:2}">Tiled</a></li>
</ul>
 <p *ngFor="let cs of contentSources">{{cs.Name }}</p>
 <p>Goto Item:</p>
  <ul>
    <li><a routerLink="./USDDDJJF">Item USDDDJJF</a></li>
    <li><a routerLink="./ASDHVNKX">Item ASDHVNKX</a></li>
</ul>
`
})
export class VideosByNamesComponent implements OnInit {

    contentSources: PFS.Server.Core.Entities.ContentSource[] = [];

    constructor(private router: Router, private r: ActivatedRoute, private svc:VideoService) { }

    getContentSources() {
        this.svc.getFirstFolders().then((cs) => { this.contentSources = cs; });
    }

    ngOnInit() {
        this.getContentSources();
    }
}