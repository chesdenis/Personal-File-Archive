import {Component, Input,
    animate, transition, trigger, style, state} from "@angular/core";
import {BlankBoxImageControl} from "../BlankBox/blank-box-image.control";

@Component({
    moduleId: module.id,
    selector: "animated-box-image",
    templateUrl: "./animated-box-image.control.html",
    styleUrls: ["./animated-box-image.control.css"],
    animations: [
        trigger('activityChanged', [
            state('active', style({ transform: 'scale(1.5)' })),
            state('inactive', style({ transform: 'scale(1)' })),
            transition('active => inactive', animate('100ms ease-out')),
            transition('inactive => active', animate('300ms ease-in'))
        ])
    ]
})
export class AnimatedBoxImageControl extends BlankBoxImageControl {    
    activityState:string = "inactive";
}