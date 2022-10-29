import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacoesComponent } from './notificacoes.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';


@NgModule({
  declarations: [
    NotificacoesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NotificacoesComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class NotificacoesModule { }
