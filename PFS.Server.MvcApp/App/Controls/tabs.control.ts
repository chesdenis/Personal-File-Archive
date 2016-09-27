import {Component} from "@angular/core";
import {TabControl} from "./tab.control";
@Component({
    moduleId: module.id,
    selector:"tabs",
    templateUrl:'./tabs.control.html'
})
export class TabsControl{
    tabs:TabControl[]=[];

    addTab(tab:TabControl){
        if(this.tabs.length===0){
            tab.isActive=true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab:TabControl){
        this.tabs.forEach((tab)=>{
            tab.isActive=false;
        });
        tab.isActive=true;
    }

    getClasses(tab){
        return{
            active:tab.isActive
        }
    }

}