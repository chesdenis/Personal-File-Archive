import { BaseColumnTemplate } from '../Templates/columns.templates';
import { BaseCellTemplate } from '../Templates/cells.templates';

export class DataGridSettingsConfig {
    isConfigMode: boolean;

    columns: BaseColumnTemplate[];
    renderedColumns: BaseColumnTemplate[];

    rows: any[];
    renderedRows: any[];

    constructor() {
        this.columns = [];
        this.renderedColumns = [];

        this.rows = [];
        this.renderedRows = [];
    }

    buildRenderedColumns() {
        this.renderedColumns = [];

        this.columns.forEach((column) => {
            if (column.isVisible) this.renderedColumns.push(column);
        });
    }

    buildRenderedRows() {
        this.renderedRows = [];

        this.rows.forEach((row) => {
            this.renderedRows.push(row);
        });
    }
}