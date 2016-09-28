import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AllComponent} from './all.component';
import {AllByTagsComponent} from './all-by-tags.component';

const allRoutes: Routes = [
    {
        path: '',
        component: AllComponent,
        children: [
            {path:'tags', component: AllByTagsComponent}
        ]
    }
];