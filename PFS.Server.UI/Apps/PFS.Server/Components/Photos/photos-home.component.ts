import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `<p>Photos Home Page</p>
    <ul>
    <li><a routerLink="/photo/tags">To Photos By Tags</a></li>
    <li><a routerLink="/photo/names">To Photos By Names</a></li>
    <li><a routerLink="/photo/dates">To Photos By Dates</a></li>
</ul>`
})
export class PhotosHomeComponent
{

}