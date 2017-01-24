import { Component, OnInit, Input } from '@angular/core';
import { ColumnConfig } from '../Configs/column.config';

@Component({
    selector: "base-column",
    template: `<ng-content></ng-content>`
})
export class BaseColumn {

    @Input() config: ColumnConfig;

    type: string;

    constructor() {
        this.type = "base";
        this.config = new ColumnConfig();
    }

}