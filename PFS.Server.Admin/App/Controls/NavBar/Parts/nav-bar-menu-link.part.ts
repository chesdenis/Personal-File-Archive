import { Component } from "@angular/core";

@Component({
    selector: "li[nav-bar-menu-link]",
    template: `
        <a href="#"> Link <span class="sr-only">(current)</span></a>
`,
    host: {
        "[class]": "hostCssClass",
    }
})

export class NavBarMenuLink {
    hostCssClass: string = "active";
}