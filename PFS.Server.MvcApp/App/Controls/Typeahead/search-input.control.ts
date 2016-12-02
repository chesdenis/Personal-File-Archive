import {Component, Input, Output, ElementRef, EventEmitter} from "@angular/core"
import {Observable} from "rxjs/Rx"

@Component({
    moduleId: module.id,
    selector: "search-input",
    templateUrl: './search-input.control.html'
})
export class SearchInputControl{
    @Input() placeholder: string;
    @Input() delay: number = 300;
    @Input() val: string = "";

    @Output() valueEvent: EventEmitter<any> = new EventEmitter<any>();


    constructor(private elementRef: ElementRef){
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
                            .map(() => this.val)
                            .debounceTime(this.delay);
                            //.distinctUntilChanged();

        eventStream.subscribe(input => this.valueEvent.emit(this.val));
    }

}