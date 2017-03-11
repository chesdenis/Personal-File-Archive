import { Component } from "@angular/core";

@Component({
    selector: "nav[nav-bar-with-settings]",
    template: `
<div class="container-fluid">
    <div nav-bar-header></div>
    <div nav-bar-collapsed-panel></div>
</div>
`,
    host: {
        "[class]": "hostCssClass"
    }
})
export class NavBarWithSettingsComponent
{
    hostCssClass: string = "navbar navbar-default";

     
}