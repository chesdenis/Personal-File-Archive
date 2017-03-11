import { Component } from "@angular/core";

@Component({
    selector: "div[nav-bar-collapsed-panel]",
    template: `
<ul nav-bar-link-list></ul>
`,
    host: {
"[class]": "hostCssClass"
    }
})
export class NavBarCollapsedPanel {

    hostCssClass: string = "collapse navbar-collapse";

}