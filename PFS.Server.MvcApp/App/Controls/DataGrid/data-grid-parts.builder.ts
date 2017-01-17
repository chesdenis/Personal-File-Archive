import { GridHeader } from './Parts/grid.header';
import { BaseColumn } from './Columns/base.column';
import { TextColumn } from './Columns/text.column';

import { DataGridControl } from './data-grid.control';

export class DataGridPartsBuilder
{
    private name: string;
    private columns: BaseColumn[];

    constructor(name: string) {
        this.name = name;
        this.columns = [];
    }

    clearColumns(): DataGridPartsBuilder {
        this.columns = [];

        return this;
    }

    setCustomColumns(...customColumns: BaseColumn[]): DataGridPartsBuilder {
        this.clearColumns();

        return this.appendCustomColumns(...customColumns);
    }

    appendCustomColumns(...customColumns: BaseColumn[]): DataGridPartsBuilder {

        customColumns.forEach((value, index, array) => {
            this.columns.push(value);
        });

        return this;
    }
     
    setTextColumns(...columnsTitles: string[]): DataGridPartsBuilder {
        this.columns = [];
        
        return this.appendTextColumns(...columnsTitles);
    }

    appendTextColumns(...columnsTitles: string[]): DataGridPartsBuilder {
        columnsTitles.forEach((value, index, array) => {

            let textColumn = new TextColumn();
            textColumn.headerText = value;
            textColumn.isVisible = true;

            this.columns.push(textColumn);
        });
        return this;
    }

    buildHeader(): GridHeader {
        let retVal = new GridHeader();

        this.columns.forEach((value, index, array) => {
            
            retVal.includeColumn(value);
        });

        retVal.prepareRender();
        
        return retVal;

    }

}