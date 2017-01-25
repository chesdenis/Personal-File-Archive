import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { BaseColumn } from '../Columns/base.column';

@Pipe({
    name: "visibleColumnsOnly"
})
@Injectable()
export class VisibleColumnsOnlyPipe implements PipeTransform {
    transform(items: BaseColumn[], args: any[]): BaseColumn[] {
        return items.filter(item => item.config.isVisible == true);
    }
}