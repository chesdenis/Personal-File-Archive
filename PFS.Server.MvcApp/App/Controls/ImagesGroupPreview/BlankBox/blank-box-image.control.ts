import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "blank-box-image",
    templateUrl: "./blank-box-image.control.html",
    styleUrls: ["./blank-box-image.control.css"]
})
export class BlankBoxImageControl {
    @Input() src: string;
    @Input() alt: string;
    @Input() title: string;

    protected ShowImageName(name: string): void {
        alert("Show image " + name);
    }
}