import { Component, OnInit, Input } from '@angular/core';
import { BaseButton } from './base.button';

@Component({
    selector: "button[switch-mode-to-config]",
    template: `<span class="glyphicon glyphicon-wrench"></span>`,
    host: {
        '[class]': 'hostClass',
        '[attr.type]': 'hostType',
        '(click)': 'hostClick()'
    }
})
export class SwitchModeToConfigButton extends BaseButton implements OnInit {
    hostClass: string = "btn btn-default";
    hostType: string = "button";

    constructor() {
        super();
    }

    hostClick() {
        console.log(" SwitchModeToConfigButton hostClick");
    }

    onEvent() {
        console.log(" SwitchModeToConfigButton outside event");
    }

    ngOnInit() {
        console.log("SwitchModeToConfigButton initiated");
    }
}