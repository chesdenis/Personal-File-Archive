import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TagsComponent } from './tags.component';

import { TagsService } from './tags.service';

const moduleRoutes: Routes = [

    {
        path: '', component: TagsComponent,
        children: [
            //{ path: '', redirectTo: "/Tags/Default", pathMatch: 'full' },
            //{ path: 'Default', component: TagsComponent },
            //{ path: 'Tags', component: ByTagsComponent },
            //{ path: 'Dates', component: ByDatesComponent }
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(moduleRoutes)
    ],
    declarations: [
        TagsComponent,
    ],
    providers: [
        TagsService
    ]
})
export class TagsModule { }