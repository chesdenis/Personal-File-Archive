import {Component, Input ,trigger, state, style, transition, animate} from '@angular/core';
import {ImageItemControl} from './image-item.control';

@Component({
    selector: 'image-box',
    templateUrl: './blank-box-image-preview.control.html',
    animations: [
        trigger('imageAnimateTrigger', [
            state('mouseleave', style({
                transform: 'scale(1) rotate(0deg)'
            })),
            state('mouseenter', style({
                transform: 'scale(1.5) rotate(15deg)'
            })),
            transition('mouseleave => mouseenter', animate('100ms ease-in')),
            transition('mouseenter => mouseleave', animate('100ms ease-out'))
        ])
    ]
})
export class BlankBoxImagePreviewControl {

    imageItems: ImageItemControl[] = [];

    AddImageItems(option: ImageItemControl) {
        this.imageItems.push(option);
    };

    ToggleImageState(image : ImageItemControl){
        this.imageItems.forEach((image)=>{
            image.imageState='mouseleave';
        });

        image.imageState='mouseenter';
    }

    ResetImageState(image: ImageItemControl){
         this.imageItems.forEach((image)=>{
            image.imageState='mouseleave';
        });
    }
}