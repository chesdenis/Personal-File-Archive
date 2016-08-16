import {Component, Input } from "@angular/core";

@Component({
    selector: "topmenu",
    template:
    `
    <h2>Welcome, {{userLogin}}!</h2>
    <hr/>
    <div style="background-color:red;" *ngIf="userLogin=='admin'">
      <button *ngFor="let btn of buttons" (click)="functionTest(btn)">{{btn.name}}</button> 
    </div>   

    `
})

export class TopmenuComponent {

    UsersButtons: SimpleButton[] = [
         { "name": "Home", "command": "alert('Home')" },
        { "name": "Contacts", "command": "alert('Contacts')" },
        { "name": "Create", "command": "alert('Create')" },
        { "name": "Delete", "command": "alert('Delete')" },
        { "name": "Restore", "command": "alert('Restore')" },
        { "name": "Reports", "command": "alert('Reports')"}
       
    ];

    public buttons = this.UsersButtons;    

    @Input()
    userLogin = "admin";

    functionTest(param) {
        eval(param.command);
    }

}

export class SimpleButton {
      name: string;
      command: string;
    }
