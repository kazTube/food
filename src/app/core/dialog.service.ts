import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogeComponent } from '../mat-dialoge/mat-dialoge.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg: string) {
    this.dialog.open(MatDialogeComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    })
  }
}
