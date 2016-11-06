import { Injectable } from '@angular/core';
import { DataFromServer } from "./typeahead-mock"

@Injectable()
export class TypeaheadSearchService {
     getSearchData(): string[] {
         return DataFromServer;
     } 
}