import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './perfil.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ContainerModule } from 'src/app/components/container/container.module';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PerfilComponent }]),
    BreadcrumbModule,
    ContainerModule,
  ]
})
export class PerfilModule { }
