import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    BreadcrumbModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class HomeModule {}
