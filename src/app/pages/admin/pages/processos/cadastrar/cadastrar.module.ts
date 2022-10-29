
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarComponent } from './cadastrar.component';
import { RouterModule } from '@angular/router';
import { ContainerModule } from './../../../../../components/container/container.module';

import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CadastrarComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class CadastrarModule { }
