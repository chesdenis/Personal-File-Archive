import { Injectable } from '@angular/core';
import "jaydata/odata";
import { type, factory, PFS, Default, $data } from "../../../../Contexts/JayDataContext";


@Injectable()
export class VideoService
{
    dbCtx(): Promise<Default.Container>{
        return factory({}).onReady();
    }

    getFirstFolders(): Promise<PFS.Server.Core.Entities.ContentSource[]> {
        return this.dbCtx().then((dbCtx) => {
            return dbCtx.ContentSources.toArray();
        });
    }
}