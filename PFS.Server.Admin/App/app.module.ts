import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarWithSettingsComponent } from './Controls/NavBar/Components/nav-bar-with-settings.component';
import { NavBarHeaderPart } from './Controls/NavBar/Parts/nav-bar-header.part';
import { NavBarCollapsedPanel } from './Controls/NavBar/Parts/nav-bar-collapsed-panel.part';
import { NavBarLinkList } from './Controls/NavBar/Parts/nav-bar-link-list.part';
import { NavBarDropdown } from './Controls/NavBar/Parts/nav-bar-dropdown.part';
import { NavBarForm } from './Controls/NavBar/Parts/nav-bar-form.part';
import { NavBarFormgroup } from './Controls/NavBar/Parts/nav-bar-formgroup.part';
import { NavBarMenuLink } from './Controls/NavBar/Parts/nav-bar-menu-link.part';
import { NavBarMenuSeparator } from './Controls/NavBar/Parts/nav-bar-menu-separator.part';


const rootRoutes: Routes = [
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes)
    ],
  declarations:
  [
      AppComponent,
      NavBarWithSettingsComponent,
      NavBarHeaderPart,
      NavBarCollapsedPanel,
      NavBarLinkList,
      NavBarDropdown,
      NavBarForm,
      NavBarFormgroup,
      NavBarMenuLink,
      NavBarMenuSeparator
      
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }