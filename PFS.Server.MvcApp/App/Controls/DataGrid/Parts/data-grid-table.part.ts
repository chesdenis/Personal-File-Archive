import { Component, OnInit } from '@angular/core';

@Component({
    selector: "table[data-grid-table]",
    template: `<ng-content></ng-content>`,
    host: {
        '[class]': 'hostCssClass'
    }
})
export class DataGridTablePart implements OnInit {
    hostCssClass: string = "table table-bordered table-hover table-striped";

    ngOnInit() {
        console.log("DataGridTablePart initiated");
    }
}