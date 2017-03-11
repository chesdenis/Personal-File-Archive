import { Component } from "@angular/core";

@Component({
    selector: "form[nav-bar-form]",
    template: `
<div nav-bar-formgroup></div>
`,
    host: {
        "[class]": "hostCssClass"
    }
})
export class NavBarForm {

    hostCssClass: string = "navbar-form navbar-left";

}