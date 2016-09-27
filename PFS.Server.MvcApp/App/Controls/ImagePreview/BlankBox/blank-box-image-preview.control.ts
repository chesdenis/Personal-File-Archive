import {Component} from '@angular/core';
import {ImageItemControl} from './image-item.control';

@Component({
    selector: 'image-box',
    templateUrl: './blank-box-image-preview.control.html'
})
export class BlankBoxImagePreviewControl {

    imageItems: ImageItemControl[] = [];

    AddImageItems(option: ImageItemControl) {
        this.imageItems.push(option);
    };


}