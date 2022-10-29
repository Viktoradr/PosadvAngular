import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuPlanoComponent } from './meu-plano.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';


@NgModule({
  declarations: [
    MeuPlanoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MeuPlanoComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class MeuPlanoModule { }
