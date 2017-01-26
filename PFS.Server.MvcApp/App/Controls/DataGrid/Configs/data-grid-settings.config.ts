import { BaseColumn } from '../Columns/base.column';

export class DataGridSettingsConfig {
    isConfigMode: boolean;
    columns: BaseColumn[];
    renderedColumns: BaseColumn[];

    constructor() {
        this.columns = [];
        this.renderedColumns = [];
    }

    buildRenderedColumns() {
        this.renderedColumns = [];

        this.columns.forEach((column) => {
            if (column.isVisible) this.renderedColumns.push(column);
        });
    }
}