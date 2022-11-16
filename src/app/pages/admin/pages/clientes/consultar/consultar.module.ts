import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarComponent } from './consultar.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TableMaterialModule } from 'src/app/components/table/table.module';
import { FormAMModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConsultarComponent }]),
    ReactiveFormsModule,
    BreadcrumbModule,
    ContainerModule,
    MatDividerModule,
    FormAMModule,
    MatIconModule,
    TableMaterialModule,
  ]
})
export class ConsultarModule { }
