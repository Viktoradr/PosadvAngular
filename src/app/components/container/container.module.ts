import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    ContainerComponent
  ],
})
export class ContainerModule { }
