import { Injectable } from '@angular/core';
import { GenericService } from '../Generic/generic-service';
import { Book, mockBooks } from '../../Model/book';

import "jaydata/odata";
import { type, dbContextFactory, PFS, Default, $data } from '../../Contexts/db.odata.context';
import { DataGridSettingsConfig } from '../../Controls/DataGrid/Configs/data-grid-settings.config';
import { TextColumnTemplate, DropdownColumnTemplate } from '../../Controls/DataGrid/Templates/columns.templates';

@Injectable()
export class BooksService extends GenericService<Book>  {

    private dbContext: Default.Container = null;
    private isDbContextExist: boolean = false;

    constructor() {
        super(mockBooks);

        dbContextFactory({}).onReady().then((ctx) => {
            this.dbContext = ctx;
        });
    }

    initDbContext(): Promise<Default.Container> {
        const retVal = new Promise<Default.Container>((resolve) => {
            if (this.isDbContextExist) {
                resolve(this.dbContext);
            }

            dbContextFactory({}).onReady()
                .then((ctx) => {
                    this.dbContext = ctx;
                    resolve(this.dbContext);
                });
        });

        return retVal;
    }

    initData(): Promise<PFS.Server.Core.Entities.Tag[]> {
        const retVal = new Promise<PFS.Server.Core.Entities.Tag[]>((resolve) => {
            resolve(this.dbContext.Tags.toArray());
        });

        return retVal;
    }

    getTagsGridConfig(): Promise<DataGridSettingsConfig> {
        const retVal = new Promise<DataGridSettingsConfig>((resolve, reject) => {

            this.initDbContext()
                .then(() => {
                    this.initData().then(tags => {

                        let gridConfig = new DataGridSettingsConfig();

                        let colId = new TextColumnTemplate();
                        colId.internalName = "Id";
                        colId.headerText = "ИД";
                        colId.isVisible = true;

                        let colName = new TextColumnTemplate();
                        colName.internalName = "Name";
                        colName.headerText = "Название";
                        colName.isVisible = true; 

                        gridConfig.columns.push(
                            colId, colName
                        );

                        gridConfig.rows = tags.map(tag => {

                            let entity: any = {};

                            gridConfig.columns.forEach((col) => {
                                entity[col.internalName] = tag[col.internalName];
                            });

                            return entity;

                        });

                        console.log(gridConfig.rows);

                        gridConfig.buildRenderedColumns();
                        gridConfig.buildRenderedRows();

                        resolve(gridConfig);
                    });
                });


        });

        return retVal;
    }
}