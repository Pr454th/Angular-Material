import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.css',
})
export class FormModelComponent {
  constructor(
    public dialogRef: MatDialogRef<FormModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
