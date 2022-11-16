import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export type IType = 'success' | 'warning' | 'error' | 'info';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  open(type: IType, message: string, textButton: string = "OK") {
    this._snackBar.open(message, textButton, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      // duration: 1500,
      panelClass: ['snackbar-default', `${type}-snackbar`]
    });
  }
}
