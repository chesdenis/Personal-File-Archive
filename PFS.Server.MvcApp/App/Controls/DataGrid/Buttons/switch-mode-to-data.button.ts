import { Component, OnInit, Input } from '@angular/core';
import { BaseButton } from './base.button';

@Component({
    selector: "button[switch-mode-to-data]",
    template: `<span class="glyphicon glyphicon-eye-open"></span>`,
    host: {
        '[class]': 'hostClass',
        '[attr.type]': 'hostType',
        '(click)': 'hostClick()'
    }
})
export class SwitchModeToDataButton extends BaseButton implements OnInit  {
    hostClass: string = "btn btn-default";
    hostType: string = "button";

    constructor() {
        super();
    }

    hostClick() {
        console.log(" SwitchModeToDataButton hostClick");
    }

    onEvent() {
        console.log("SwitchModeToDataButton outside event");
    }

    ngOnInit() {
        console.log("SwitchModeToDataButton initiated");
    }
}