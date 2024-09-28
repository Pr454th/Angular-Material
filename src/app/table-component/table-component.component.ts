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
  displayedRows: any[] = [];
  selectedTabIndex = 1;

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

  displayRows() {
    // Deep clone the rows to avoid direct reference
    this.displayedRows.push(this.rows[0]);
    console.log(this.displayedRows);
    this.rows = [
      { field1: '', field2: '', field3: '', field4: '', field5: '' },
    ];
    this.selectedTabIndex = 0;
  }
}
