import { Pipe, PipeTransform } from '@angular/core';
import { TdType } from '../types/table.type';
import { mascara_CNJ, mascara_CNPJ, mascara_CPF } from '../functions/mask';
import { getDataString } from '../functions/data';

@Pipe({
    name: 'mask'
})
export class MaskPipe implements PipeTransform {

    transform(value: string | number | Date, type: TdType): string | number | Date {
        switch (type) {
            case 'Date':
                return getDataString(value.toString())
            case 'CNJ':
                return mascara_CNJ(value.toString())
            case 'CPF':
                return mascara_CPF(value.toString())
            case 'CNPJ':
                return mascara_CNPJ(value.toString())
            default:
                return value
        }
    }

}