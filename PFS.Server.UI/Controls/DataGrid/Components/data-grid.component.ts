import { Component, OnInit } from '@angular/core';

@Component({
    selector: "div[data-grid]",
    template: `<ng-content></ng-content>`,
    host: { 
        '[class]': 'hostCssClass'
    }
})
export class DataGridComponent implements OnInit {
    hostCssClass: string = "table-responsive";

    ngOnInit() {
        console.log("DataGridComponent init...")
    }
}