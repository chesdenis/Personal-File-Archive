import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { DataFromServer } from "./typeahead-mock"

@Injectable()
export class TypeaheadSearchService {

    constructor (private http: Http) {}

     getMoqSearchData(): string[] {
         return DataFromServer;
     } 
}