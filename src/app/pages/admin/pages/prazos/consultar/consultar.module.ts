import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarComponent } from './consultar.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConsultarComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class ConsultarModule { }
