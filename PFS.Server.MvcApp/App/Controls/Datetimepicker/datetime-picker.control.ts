import {Component} from "@angular/core";
import {CalendarControl} from "./calendar.control";

@Component({
    selector: "datetimepicker",
    templateUrl: "./datetime-picker.control.html",
    styleUrls: ["app/controls/datetimepicker/calendar.control.css"]
})
export class DatetimePickerControl
{
    isDatepickerOpened: boolean = false;

    private displayDatepicker():void{
        this.isDatepickerOpened = true;
    }

    private getDatepickerClasses():any{
        return{
            open: this.isDatepickerOpened
        }
    }
}