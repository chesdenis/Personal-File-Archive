import { Component, Input } from '@angular/core';
import { BaseColumn } from './columns/base.column';

import { GridHeader } from './parts/grid.header';
import { GridBody } from './parts/grid.body';
import { GridFooter } from './parts/grid.footer';

@Component({
    moduleId: module.id,
    selector: "data-grid",
    templateUrl: "./data-grid.control.html"
})
export class DataGridControl {

    @Input() Header: GridHeader;
    @Input() Body: GridBody;
    @Input() Footer: GridFooter;

    isConfigMode: boolean = false;
    switchToConfigView() {
        this.isConfigMode = true;
    }
    switchToDataView() {
        this.Header.prepareRender();
        this.isConfigMode = false;
    }
}

