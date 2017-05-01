import { Component, OnInit, Input } from '@angular/core';
import { BaseButton } from './base.button';
import { DataGridSettingsConfig } from '../Configs/data-grid-settings.config';
import { BaseColumnTemplate } from '../Templates/columns.templates';

@Component({
    selector: "button[add-blank-column]",
    template: `<span class="glyphicon glyphicon-plus"></span>`,
    host: {
        '[class]': 'hostClass',
        '[attr.type]': 'hostType',
        '(click)': 'addColumnClick()'
    }
})
export class AddBlankColumnButton extends BaseButton implements OnInit {

    hostClass: string = "btn btn-default";
    hostType: string = "button";

    clickCounter: number = 0;

    @Input() settings: DataGridSettingsConfig;

    constructor() {
        super();
    }

    onEvent() {
        console.log(" AddBlankColumnButton outside event");
    }

    ngOnInit() {
        console.log("AddBlankColumnButton initiated");
    }

    addColumnClick() {
        let newColumn = this.createNewColumn();

        this.settings.columns.push(newColumn);
        this.settings.buildRenderedColumns();

        console.log(" AddBlankColumnButton addClick fired...");
    }

    private createNewColumn(): BaseColumnTemplate {
        let newColumn = new BaseColumnTemplate();
        newColumn.internalName = "blankColumn_" + this.clickCounter;
        newColumn.isVisible = true;
        newColumn.type = "text";

        this.clickCounter ++;

        return newColumn;
    }
}