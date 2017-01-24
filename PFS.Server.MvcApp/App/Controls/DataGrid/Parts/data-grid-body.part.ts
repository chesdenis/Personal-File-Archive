import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: "tbody[data-grid-body]",
    template: `<ng-content></ng-content>`
})
export class DataGridBodyPart implements OnInit {
    @Input() rows: any[];

    ngOnInit() {
        console.log("DataGridBodyPart initiated");
    }
}