import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AllContentsComponent} from './all-contents.component';
import {ByTagsComponent} from './by-tags.component';

const allContentsRoutes: Routes = [
    {
        path: '',
        component: AllContentsComponent,
        children: [
            { path: 'tags', component: ByTagsComponent}
        ]
    }
];

export const allContentsRouting: ModuleWithProviders = RouterModule.forChild(allContentsRoutes);