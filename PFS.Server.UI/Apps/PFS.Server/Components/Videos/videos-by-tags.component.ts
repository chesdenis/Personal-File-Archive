import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `<p>Videos By Tags</p>
    <p>Switch view Mode:</p>
     <ul>
    <li><a routerLink="/video/tags" [queryParams]="{viewMode:1}">Grid</a></li>
    <li><a routerLink="/video/tags" [queryParams]="{viewMode:2}">Tiled</a></li>
</ul>
 <p>Goto Item:</p>
  <ul>
    <li><a routerLink="/video/USDDDJJF">Item USDDDJJF</a></li>
    <li><a routerLink="/video/ASDHVNKX">Item ASDHVNKX</a></li>
</ul>
    <p>Goto Tag Range:</p>
    <ul>
    <li><a routerLink="/video/tags" [queryParams]="{tagIds:'1,2,3'}">Tag with Ids 1,2,3</a></li>
    <li><a routerLink="/video/tags" [queryParams]="{tagIds:'2,3,4'}">Tag with Ids 2,3,4</a></li>
</ul>
`
})
export class VideosByTagsComponent
{

}