import { Component, OnInit, Input } from '@angular/core';
import { BaseButton } from './base.button';
import { DataGridSettingsConfig } from '../Configs/data-grid-settings.config';

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

    @Input() settings: DataGridSettingsConfig;

    constructor() {
        super();
    }

    hostClick() {
        console.log(" SwitchModeToDataButton hostClick");
        this.settings.isConfigMode = false;
        this.settings.columns = this.settings.columns;
    }

    onEvent() {
        console.log("SwitchModeToDataButton outside event");
    }

    ngOnInit() {
        console.log("SwitchModeToDataButton initiated");
    }
}