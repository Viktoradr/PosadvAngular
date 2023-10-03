import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ConsultarComponent } from './consultar.component';

import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { MatDividerModule } from '@angular/material/divider';
import { ContainerModule } from 'src/app/components/container/container.module';
import { FormAMModule } from 'src/app/shared/extensions/angular-material.module';
import { MatIconModule } from '@angular/material/icon';
import { TableMaterialModule } from 'src/app/components/table/table.module';

@NgModule({
  declarations: [ConsultarComponent],
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
  ],
})
export class ConsultarModule {}
