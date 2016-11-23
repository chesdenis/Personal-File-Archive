import {Component,Input} from "@angular/core";
import {TabsControl} from "./tabs.control";

@Component({
    moduleId: module.id,
    selector:"tab",
    templateUrl:'./tab.control.html'
})
export class TabControl{
    isActive:boolean=false;
    @Input() tabTitle:string; 

    constructor(tabs:TabsControl){
        tabs.addTab(this);
    }
}