import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `<p>Videos Home Page</p>
    <ul>
    <li><a routerLink="/video/tags">To Videos By Tags</a></li>
    <li><a routerLink="/video/names">To Videos By Names</a></li>
    <li><a routerLink="/video/dates">To Videos By Dates</a></li>
</ul>`
})
export class VideosHomeComponent
{

}