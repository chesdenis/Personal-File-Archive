import { Component, OnInit, Input } from '@angular/core';
import { BaseColumnTemplate } from './columns.templates'

@Component({
    selector: "base-cell",
    template: `<ng-content></ng-content>`
})
export class BaseCellTemplate {
    type: string;

    @Input() row: any;
    @Input() column: BaseColumnTemplate;

    get cellValue(): string {
        return this.row[this.column.internalName];
    }

    constructor() {
        this.type = "base";
    }

}

@Component({
    selector: "dropdown-cell",
    template: `
<select>
    <option *ngFor="let optionValue of column.choices" value="{{optionValue}}">{{optionValue}}</option>
</select>`
})
export class DropdownCellTemplate extends BaseCellTemplate implements OnInit {

    constructor() {
        super();
        this.type = "dropdown";
    }

    ngOnInit() {
        console.log("DropdownCell init...");
    }
}

@Component({
    selector: "text-cell",
    template: `{{cellValue}}`
})
export class TextCellTemplate extends BaseCellTemplate implements OnInit {

    constructor() {
        super();
        this.type = "text";
    }

    ngOnInit() {
        console.log("TextCell init...");
    }
}