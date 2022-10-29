import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';


@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AgendaComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class AgendaModule { }
