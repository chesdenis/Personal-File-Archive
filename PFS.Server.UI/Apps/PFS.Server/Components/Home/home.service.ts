import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {

    getContentSources(): any {
        return CONTENTSOURCES;
     }

}

export const CONTENTSOURCES: any[] = [
    { Id: 5, Name: '/d', DriveName: 'd:\\' },
    { Id: 6, Name: '/a', DriveName: 'a:\\' },
    { Id: 7, Name: '/c', DriveName: 'c:\\' },
];