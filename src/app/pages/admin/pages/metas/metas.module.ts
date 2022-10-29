import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetasComponent } from './metas.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';


@NgModule({
  declarations: [
    MetasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MetasComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class MetasModule { }
