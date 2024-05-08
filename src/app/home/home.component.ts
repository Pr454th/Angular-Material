import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { FormModelComponent } from '../form-model/form-model.component';
import { EditButtonRendererComponent } from './edit-button-renderer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private gridApi: any;
  private gridColumnApi: any;

  columnDefs: (ColDef | ColGroupDef)[] = [
    { headerName: 'ID', field: 'id', editable: true },
    {
      headerName: 'Name',
      field: 'name',
      editable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    { headerName: 'Age', field: 'age', editable: true },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: EditButtonRendererComponent,
      cellRendererParams: {
        onClick: this.openEditModal.bind(this),
      },
    },
  ];

  frameworkComponents: any = {
    editButtonRenderer: EditButtonRendererComponent,
  };

  rowData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ];

  constructor(public dialog: MatDialog) {}

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }
  getRowNodeId(data: any) {
    return data.id;
  }

  gridOptions = {
    suppressContextMenu: true,
    getRowNodeId: this.getRowNodeId.bind(this),
  };

  openEditModal(data: any) {
    console.log(data);
    const dialogRef = this.dialog.open(FormModelComponent, {
      width: '250px',
      data: { ...data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      result.age = parseInt(result.age);
      result.id = parseInt(result.id);
      if (result) {
        // const index = this.rowData.findIndex((row) => row.id === data.id);
        // this.rowData[index] = result;
        // console.log(this.rowData);
        // this.gridApi.applyTransaction({ update: this.rowData });
        this.gridApi.forEachNode((node: any) => {
          if (node.data.id === data.id) {
            node.setData(result);
          }
        });
      }
    });
  }
}
