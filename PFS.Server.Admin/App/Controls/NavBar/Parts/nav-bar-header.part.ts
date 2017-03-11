import { Component } from "@angular/core";

@Component({
    selector: "div[nav-bar-header]",
    template: `
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
`,
    host: {
        "[class]": "hostCssClass"
    }
})

export class NavBarHeaderPart
{

    hostCssClass: string = "navbar-header";

}