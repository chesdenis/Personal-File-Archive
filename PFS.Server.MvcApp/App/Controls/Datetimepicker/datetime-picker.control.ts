import {Component, OnInit, ElementRef, Input} from "@angular/core";
import {CalendarControl} from "./calendar.control";

@Component({
    selector: "datetimepicker",
    templateUrl: "./datetime-picker.control.html"//,
    //styleUrls: ["app/controls/datetimepicker/calendar.control.css"]
})
export class DatetimePickerControl implements OnInit
{
    @Input() title: string = "From: ";

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
        this.hideDatepicker();
    }

    private clickedOutsideCalendar(event):void{
        let clickedInside: boolean = this._elRef.nativeElement.contains(event.target);
        if (!clickedInside) {
            this.hideDatepicker();
        }
    }
}