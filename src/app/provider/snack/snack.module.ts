import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackService } from './snack.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [SnackService]
})
export class SnackModule { }
