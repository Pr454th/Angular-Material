import { Component } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent {
  rows: any[] = [
    { field1: '', field2: '', field3: '', field4: '', field5: '' },
  ];

  // Method to add a new row
  addRow() {
    this.rows.push({
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
    });
  }

  // Method to remove a row
  removeRow(index: number) {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
    }
  }

  printRowsAsJson() {
    console.log(JSON.stringify(this.rows, null, 2));
  }
}
