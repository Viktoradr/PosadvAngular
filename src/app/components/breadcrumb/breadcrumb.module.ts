import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, MatCardModule, MatDividerModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
