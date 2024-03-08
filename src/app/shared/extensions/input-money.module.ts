import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "left",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "",
    suffix: "",
    thousands: "."
};

@NgModule({
    imports: [
        CommonModule,
        CurrencyMaskModule
    ],
    exports: [CurrencyMaskModule],
    providers: [
        { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    ]
})
export class InputMoneyModule { }
