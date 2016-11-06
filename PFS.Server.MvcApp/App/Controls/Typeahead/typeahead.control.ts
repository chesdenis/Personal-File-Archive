import {Component, Input} from "@angular/core"
import {SearchInputControl} from "./search-input.control"
import {TypeaheadEntity} from "./typeahead-entity"

@Component({
    moduleId: module.id,
    selector: "typeahead",
    templateUrl: './typeahead.control.html',
    styleUrls: ["./typehead.control.css"],
})
export class TypeaheadControl {

    protected searchDataArr: string[] = [];
    protected selectedValue: string = "";
    protected typeaheadEntity : TypeaheadEntity;


    protected  SearchProcess(value: any) : void {

        // Send request to server
        this.searchDataArr = ["member", "TypeScript", "Finished", "watch", "ts", "multi", "after"];
    }

    protected SelectItem(event: any) : void{ 
        this.selectedValue = event.srcElement.textContent;

        console.log(this.selectedValue);
    }
}