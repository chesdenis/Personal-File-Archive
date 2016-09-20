import {Component, Input} from '@angular/core';
import {BlankBoxImagePreviewControl} from './blank-box-image-preview.control'

@Component({
    selector: 'image-item',
    templateUrl: './image-item.control.html'
})
export class ImageItemControl {

    @Input() src : string;
    @Input() alt : string;


    constructor(imagePreview: BlankBoxImagePreviewControl) {
        imagePreview.AddImageItems(this);
    }


}