import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "calendar",
    templateUrl: "./calendar.control.html",
    styleUrls: ["app/controls/datetimepicker/calendar.control.css"]
})
export class CalendarControl implements OnInit {
    private days: Array<string>;
    private shortDays: Array<String>;
    private months: Array<String>;
    private shortMonths: Array<String>;

    private selectedDate: Date;
    private selectedMonth: number;
    private selectedYear: number;
    private selectedDecade: Array<number>;

    private dates: Array<Array<Date>>;
    private today: Date;

    private modes = CalendarMode;
    private mode: CalendarMode;

    ngOnInit() {
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.shortDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        this.months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        this.shortMonths = ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        this.mode = CalendarMode.Days;

        this.today = new Date();
        this.selectedDate = this.copyDate(this.today);
        this.selectedMonth = this.today.getMonth();
        this.selectedYear = this.today.getFullYear();
        this.selectedDecade = this.getDecade(this.selectedYear);

        this.dates = this.setDatesArray(this.selectedMonth, this.selectedYear);
    }

    private setDatesArray(month: number, year: number): Array<Array<Date>> {
        let retDates: Array<Array<Date>> = [];

        let monthStart: Date = this.getMonthStartDate(month, year);
        let monthEnd: Date = this.getMonthEndDate(month, year);
        let calStart: Date = this.getWeekStartDate(monthStart);
        let calEnd: Date = this.getWeekEndDate(monthEnd);

        let days: Array<Date>;

        for (let date = this.copyDate(calStart), i = 0; date <= calEnd; date.setDate(date.getDate() + 1), i++) {
            if (i == 0) days = [];
            days.push(this.copyDate(date));
            if (i == 6) {
                retDates.push(this.copyArray(days));
                i = -1;
            }
        }

        return retDates;
    }

    private getWeekStartDate(date: Date): Date {
        let newDate = this.copyDate(date);
        let day: number = newDate.getDay();

        switch (day) {
            case 0: newDate.setDate(newDate.getDate() - 7);
            default: newDate.setDate(newDate.getDate() - newDate.getDay() + 1);
        }
        return newDate;
    }

    private getWeekEndDate(date: Date): Date {
        let newDate = this.copyDate(date);
        let day: number = newDate.getDay();

        if (day != 0) {
            newDate.setDate(newDate.getDate() + 7 - newDate.getDay());
        }
        return newDate;
    }

    private getMonthStartDate(month: number, year: number): Date {
        return new Date(year, month, 1);
    }

    private getMonthEndDate(month: number, year: number): Date {
        return new Date(year, month + 1, 0);
    }

    private getDecadeStartYear(year:number): number{
        let yearAsString: string = year.toString();
        let last: number = +yearAsString.charAt(yearAsString.length - 1);
        return year - last - 1;
    }

    private getDecadeEndYear(year:number): number{
        let yearAsString: string = year.toString();
        let last: number = +yearAsString.charAt(yearAsString.length - 1);
        return year - last + 10;
    }

    private getDecade(year: number): Array<number>{
        let startDecare = this.getDecadeStartYear(year);
        let endDecade = this.getDecadeEndYear(year);

        let decade: Array<number> = [];

        for(let i = startDecare; i < endDecade; i ++){
            decade.push(i);
        }

        return decade;
    }

    private copyDate(date: Date): Date {
        let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return newDate;
    }

    private copyArray(arr: Array<any>): Array<any> {
        let retArr: Array<any> = [];

        for (let i = 0; i < arr.length; i++) {
            retArr.push(arr[i]);
        }

        return retArr;
    }

    private selectDate(date: Date):void{
        this.selectedDate = date;

        if(this.selectedDate.getMonth() !== this.selectedMonth){
            if(this.selectedDate.getFullYear() !== this.selectedYear){
                this.selectYear(this.selectedDate.getFullYear());
            }

            this.selectMonth(this.selectedDate.getMonth());
        }
    }

    private selectMonth(month:number):void{
        this.selectedMonth = month;
        this.dates = this.setDatesArray(this.selectedMonth, this.selectedYear);
    }

    private selectYear(year:number):void{
        this.selectedYear = year;
    }

    private toNextMonth(): void {
        this.selectedMonth += 1;

        if (this.selectedMonth > 11) {
            this.selectedMonth = 0;
            this.selectedYear += 1;
        }

        this.dates = this.setDatesArray(this.selectedMonth, this.selectedYear);
    }

    private toPrevMonth(): void {
        this.selectedMonth -= 1;

        if (this.selectedMonth < 0) {
            this.selectedMonth = 11;
            this.selectedYear -= 1;
        }

        this.dates = this.setDatesArray(this.selectedMonth, this.selectedYear);
    }

    private getDisplayDateStyle(date: Date): any {
        return {
            old: date.getMonth() != this.selectedMonth,
            active: date.getTime() == this.selectedDate.getTime()
        }
    }

    private toNextYear(): void {
        this.selectedYear += 1;
    }

    private toPrevYear(): void {
        this.selectedYear -= 1;
    }

    private getDisplayMonthStyle(month: number): any {
        return {
            focused: month == this.selectedMonth,
            active: month == this.selectedDate.getMonth()
        }
    }

    private switchMode(mode:CalendarMode):void{
        this.mode = mode;
    }

    private getDisplayYearStyle(year: number): any {
        return {
            focused: year == this.selectedYear,
            active: year == this.selectedDate.getFullYear()
        }
    }

    private toPrevDecade(): void{
        this.selectedDecade = this.getDecade(this.selectedDecade[0] - 1);
    }

    private toNextDecade(): void{
        this.selectedDecade = this.getDecade(this.selectedDecade[0] + 1);
    }
}


export enum CalendarMode {
    Days,
    Months,
    Years
}