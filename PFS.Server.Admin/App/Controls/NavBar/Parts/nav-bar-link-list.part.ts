import { Component } from "@angular/core";

@Component({
    selector: "ul[nav-bar-link-list]",
    template: `
        <li nav-bar-menu-link></li>
        <li nav-bar-menu-link></li>
        <li nav-bar-menu-separator></li>
        <li nav-bar-menu-link></li>
        <li nav-bar-menu-link></li>
        <li nav-bar-menu-link></li>
        <li nav-bar-menu-separator></li>
        <li nav-bar-menu-link></li>
`,
    host: {
        "[class]": "hostCssClass",
    }
})

export class NavBarLinkList {
    hostCssClass: string = "nav navbar-nav";
}