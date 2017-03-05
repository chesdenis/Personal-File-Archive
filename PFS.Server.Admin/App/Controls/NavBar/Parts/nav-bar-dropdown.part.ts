import { Component } from "@angular/core";

@Component({
    selector: "ul[nav-bar-dropdown]",
    template: `
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li nav-bar-menu-link></li>
            <li nav-bar-menu-link></li>
            <li nav-bar-menu-link></li>
            <li nav-bar-menu-separator></li>
            <li nav-bar-menu-link></li>
          </ul>
        </li>
`,
    host: {
        "[class]": "hostCssClass",
    }
})

export class NavBarDropdown {
    hostCssClass: string = "nav navbar-nav";
}