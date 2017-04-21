import { Injectable } from '@angular/core';
import "jaydata/odata";
import { type, factory, PFS, Default, $data } from "../../Contexts/JayDataContext";


@Injectable()
export class AppService
{
    dbCtx(): Promise<Default.Container>{
        return factory({}).onReady();
    }
}