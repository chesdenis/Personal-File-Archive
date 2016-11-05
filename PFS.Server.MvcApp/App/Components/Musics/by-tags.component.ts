import { Component, OnInit } from '@angular/core';
import { MusicsService } from './musics.service';
import { Music } from 'App/Model/music';

@Component({
    moduleId: module.id,
    selector: 'by-tags-component',
    templateUrl: './by-tags.component.html'
})
export class ByTagsComponent implements OnInit {
    constructor(private dataService: MusicsService) { }

    musics: Music[];

    getMusics(): void {
        this.dataService
            .getEntitiesAsync()
            .then(musics => {
                this.musics = musics;
            });
    }

    ngOnInit(): void {
        this.getMusics();
    }
}