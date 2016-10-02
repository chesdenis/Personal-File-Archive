import {Component, Input, trigger, state, style, transition, animate} from '@angular/core';
import {BlankBoxImagePreviewControl} from './blank-box-image-preview.control'

@Component({
    moduleId: module.id,
    selector: 'image-item',
    templateUrl: './image-item.control.html',
})
export class ImageItemControl {

    @Input() src: string;
    @Input() alt: string;

    @Input() height: number;
    @Input() width: number;

    @Input() imageState: string;

    constructor(imagePreview: BlankBoxImagePreviewControl) {
        imagePreview.AddImageItems(this);
        this.imageState = 'inactive';
    }

}