import {Component} from "@angular/core";
import {CalendarControl} from "./calendar.control";

@Component({
    selector: "datetimepicker",
    templateUrl: "./datetime-picker.control.html"
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