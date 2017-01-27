import {Injectable} from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Book, mockBooks } from '../../Model/book';
import { DataGridSettingsConfig } from '../../Controls/DataGrid/Configs/data-grid-settings.config';
import { TextColumnTemplate, DropdownColumnTemplate } from '../../Controls/DataGrid/Templates/columns.templates';

@Injectable()
export class BooksService extends GenericService<Book>  {
    constructor() {
        super(mockBooks);
    }

    getBooksGridSettings(): Promise<DataGridSettingsConfig> {
        return this.getEntitiesAsync().then((books) => {

            return new Promise<DataGridSettingsConfig>(resolve => {
                let retVal = new DataGridSettingsConfig();

                let colId = new TextColumnTemplate();
                colId.internalName = "Id";
                colId.headerText = "ИД";
                colId.isVisible = true;

                let colName = new TextColumnTemplate();
                colName.internalName = "Name";
                colName.headerText = "Название";
                colName.isVisible = true; 


                let colGuid = new TextColumnTemplate();
                colGuid.internalName = "Guid";
                colGuid.headerText = "УИД";
                colGuid.isVisible = true; 
                
                let colPath = new TextColumnTemplate();
                colPath.internalName = "Path";
                colPath.headerText = "Путь";
                colPath.isVisible = true; 

                let colTags = new DropdownColumnTemplate();
                colTags.internalName = "Tags";
                colTags.headerText = "Теги";
                colTags.isVisible = true; 
                colTags.choices = ["R", "T", "J", "H", "I"];
                
                retVal.columns.push(
                    colId, colName, colGuid, colPath, colTags
                );

                retVal.rows = books.map(book => { return book });

                retVal.buildRenderedColumns();
                retVal.buildRenderedRows();

                resolve(retVal);
            });
        });
    }
}