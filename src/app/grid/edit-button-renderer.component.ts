import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'edit-button-renderer',
  template: `
    <button mat-icon-button color="primary" (click)="editClicked()">
      <mat-icon>edit</mat-icon>
    </button>
  `,
})
export class EditButtonRendererComponent {
  constructor(private dialog: MatDialog) {}

  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  editClicked(): void {
    console.log(this.params);
    this.params.onClick(this.params.data);
  }
}
