import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'auto', appearance: 'outline' },
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    // {
    //   provide: MAT_DATE_FORMATS,
    //   useValue: {
    //     parse: {
    //       dateInput: ['l', 'LL'],
    //     },
    //     display: {
    //       dateInput: 'L',
    //       monthYearLabel: 'DD MM YYYY',
    //       dateA11yLabel: 'LL',
    //       monthYearA11yLabel: 'MMMM YYYY',
    //     },
    //   },
    // },
  ],
})
export class FormAMModule { }
