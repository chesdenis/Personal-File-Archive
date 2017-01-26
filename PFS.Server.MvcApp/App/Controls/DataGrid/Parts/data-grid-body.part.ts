import { Component, OnInit, Input } from "@angular/core";
import { DataGridSettingsConfig } from "../Configs/data-grid-settings.config";

@Component({
    selector: "tbody[data-grid-body]",
    template: `<ng-content></ng-content>`
})
export class DataGridBodyPart implements OnInit {
    @Input() settings: DataGridSettingsConfig;

    ngOnInit():void {
        console.log("DataGridBodyPart initiated");
    }
}