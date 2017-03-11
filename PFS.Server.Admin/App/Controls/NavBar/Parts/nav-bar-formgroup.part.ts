import { Component } from "@angular/core";

@Component({
    selector: "div[nav-bar-formgroup]",
    template: `
<input type="text" class="form-control" placeholder="Search">
`,
    host: {
        "[class]": "hostCssClass"
    }
})
export class NavBarFormgroup {

    hostCssClass: string = "form-group";

}