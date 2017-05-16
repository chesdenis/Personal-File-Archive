import { BaseColumnTemplate, columnTypes } from '../Templates/columns.templates';
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


export class DataGridColumnsOptions{
   addColumn(internalName: string, headerText = internalName, isVisible = true, columnType =columnTypes.text){
       console.log("internalName is "+ internalName);
       console.log('headerText is '+ headerText);
       console.log('isVisible is ' + isVisible);
       console.log('columnType is ' + columnType);

   };
   addColumn2(internalName: string, headerText?: string, isVisible?:boolean, columnType?:columnTypes){
       console.log(internalName);
       console.log(headerText);
       console.log(isVisible);
       console.log(columnType);
   };
};


export class DataGridRowsOptions{
    setData(data: any[]){
        console.log(data);
    };
};
 