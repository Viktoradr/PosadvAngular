import { Pipe, PipeTransform } from '@angular/core';
import { getDataString } from '../functions/data';

@Pipe({
    name: 'tableMask'
})
export class TableMaskPipe implements PipeTransform {

    transform(value: any): string {
        return value instanceof Date ? getDataString(value) : value
    }

}