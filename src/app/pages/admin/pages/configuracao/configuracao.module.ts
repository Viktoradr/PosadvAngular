import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracaoComponent } from './configuracao.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';


@NgModule({
  declarations: [
    ConfiguracaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConfiguracaoComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class ConfiguracaoModule { }
