import {Component, OnInit, ElementRef} from "@angular/core";
import {CalendarControl} from "./calendar.control";

@Component({
    selector: "datetimepicker",
    templateUrl: "./datetime-picker.control.html",
    //styleUrls: ["app/controls/datetimepicker/calendar.control.css"]
    host: {
    '(document:click)': 'documentOnClick($event)',
  }
})
export class DatetimePickerControl implements OnInit
{
    private _calendar: CalendarControl;
    private selectedDate: string;

    isDatepickerOpened: boolean;

    constructor(private _elRef:ElementRef){}

    ngOnInit(){
        this.selectedDate = "";
        this.isDatepickerOpened = false;
    }

    private showDatepicker():void{
        this.isDatepickerOpened = true;
    }

    private hideDatepicker():void{
        this.isDatepickerOpened = false;
    }

    private toggleDatepickerVisibility():void{
        if(this.isDatepickerOpened){
            this.hideDatepicker();
        }
        else{
            this.showDatepicker();
        }
    }

    private getDatepickerClasses():any{
        return{
            open: this.isDatepickerOpened
        }
    }

    private dateChanged(event):void{
        this.selectedDate = event;
    }

    private documentOnClick(event){
        if (!(this.isClickedOnMe(event) || this._calendar.isClickedOnMe(event))){
            this.hideDatepicker();
        }
    }

    public isClickedOnMe(event):boolean{
        return this._elRef.nativeElement.contains(event.target);
    }

    public addCalendar(calendar:CalendarControl){
        this._calendar = calendar;
    }
}