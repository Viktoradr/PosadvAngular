
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarComponent } from './cadastrar.component';
import { RouterModule } from '@angular/router';
import { ContainerModule } from './../../../../../components/container/container.module';

import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormAMModule } from 'src/app/shared/extensions/angular-material.module';
import { SnackModule } from 'src/app/provider/snack/snack.module';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { InputMoneyModule } from 'src/app/shared/extensions/input-money.module';

@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CadastrarComponent }]),
    BreadcrumbModule,
    ContainerModule,
    ReactiveFormsModule,
    ContainerModule,
    InputMoneyModule,
    FormAMModule,
    MatIconModule,
    SnackModule,
    MatListModule,
    MatStepperModule,
  ]
})
export class CadastrarModule { }
