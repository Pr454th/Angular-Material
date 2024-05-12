import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { FormModelComponent } from '../form-model/form-model.component';
import { EditButtonRendererComponent } from '../grid/edit-button-renderer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  editClicked(data: any) {
    console.log('data got from ag grid', data);
  }
}
