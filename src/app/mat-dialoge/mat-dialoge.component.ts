import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mat-dialoge',
  templateUrl: './mat-dialoge.component.html',
  styleUrls: ['./mat-dialoge.component.scss']
})
export class MatDialogeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<MatDialogeComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
this.dialogRef.close();
  }
}
