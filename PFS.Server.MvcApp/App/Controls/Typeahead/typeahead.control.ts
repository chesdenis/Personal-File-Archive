import {Component, Input} from "@angular/core"
import {SearchInputControl} from "./search-input.control"
import {TypeaheadEntity} from "./typeahead-entity"
import {TypeaheadSearchService} from '../../Services/TypeaheadService/typeahead-search.service';

@Component({
    moduleId: module.id,
    selector: "typeahead",
    templateUrl: './typeahead.control.html',
    styleUrls: ["./typehead.control.css"],
    providers: [TypeaheadSearchService]
})
export class TypeaheadControl {

    protected searchDataArr: string[] = [];
    protected selectedValue: string = "";
    protected typeaheadEntity : TypeaheadEntity;

    constructor(private searchService: TypeaheadSearchService) { }

    protected  SearchProcess(value: any) : void {

        // Send request to server
        this.searchDataArr = this.searchService.getMoqSearchData();
    }

    protected SelectItem(event: any) : void{ 
        this.selectedValue = event.srcElement.textContent;

        console.log(this.selectedValue);
    }
}