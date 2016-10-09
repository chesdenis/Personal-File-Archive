import {Component, Input} from '@angular/core';
import {NavBarMenuEntity} from './nav-bar-menu.entity';
import {NavTopBarControl} from './nav-top-bar.control';

@Component({
    moduleId: module.id,
    selector: 'nav-bar-zone',
    templateUrl: './nav-bar-zone.control.html'
})
export class NavBarZoneControl
{
    @Input() align: string = "left";
    @Input() menuEntities: NavBarMenuEntity[] = [];

    constructor(private navBar: NavTopBarControl) {
    }
    
    getClasses() {
        return {
            'navbar-left': this.align === "left",
            'navbar-right': this.align === "right"
        }
    }

    onSelectMenuEntity(menuEntity: NavBarMenuEntity) {
        this.navBar.hideBody();

        let brandExtraText = menuEntity.TextContent;

        this.navBar.setBrandAdditionalText(`-${brandExtraText}`);
    }
}