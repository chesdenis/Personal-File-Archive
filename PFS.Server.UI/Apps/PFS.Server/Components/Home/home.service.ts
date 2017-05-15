import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

    constructor(private http: Http) { };

    private getContentSourcesUrl = 'odata/ContentSources';

    getContentSources(): Promise<any> {
        return this.http.get(this.getContentSourcesUrl)
            .toPromise()
            .then(r => r.json().value);
    }

}

// export const CONTENTSOURCES: any[] = [
//     { Id: 5, Name: '/d', DriveName: 'd:\\' },
//     { Id: 6, Name: '/a', DriveName: 'a:\\' },
//     { Id: 7, Name: '/c', DriveName: 'c:\\' },
// ];