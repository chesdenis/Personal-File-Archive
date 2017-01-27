import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: "base-column",
    template: `<ng-content></ng-content>`
})
export class BaseColumnTemplate {
    type: string;

    @Input() internalName: string;
    @Input() headerText: string;
    @Input() isVisible: boolean;

    constructor() {
        this.type = "base";
    }

}

@Component({
    selector: "text-column",
    template: `{{headerText}}`
})
export class TextColumnTemplate extends BaseColumnTemplate implements OnInit {

    constructor() {
        super();
        this.type = "text";
    }

    ngOnInit() {
        console.log("TextColumn init...");
    }
}

@Component({
    selector: "dropdown-column",
    template: `{{headerText}}`
})
export class DropdownColumnTemplate extends BaseColumnTemplate implements OnInit {

    choices: string[];

    constructor() {
        super();
        this.type = "dropdown";
    }

    ngOnInit() {
        console.log("DropdownColumn init...");
    }
}