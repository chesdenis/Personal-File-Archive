import { Component } from "@angular/core";

@Component({
    selector: "li[nav-bar-menu-separator]",
    template: ``,
    host: {
        "[class]": "hostCssClass",
    }
})

export class NavBarMenuSeparator {
    hostCssClass: string = "divider";
    hostRole: string = "separator";
}