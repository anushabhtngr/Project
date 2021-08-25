import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { GridService } from '../grid.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

export interface User {
  'Position':number;
  'Name': string;
  'Country': string;
  'Skills': any;
  'Proficiency': any;
  'Mobile': string;
  'Landline': string;
  'Address': string;
}

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  displayedColumns: string[] = ['Position','Name','Country','Skills','Proficiency','Mobile','Landline','Address'];
  userList:any = [];
  dataSource:any = new MatTableDataSource<User>(this.userList);;
  selection = new SelectionModel<User>(true, []);
  

  constructor(
    private cdref: ChangeDetectorRef,
    private gridService: GridService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.cdref.detectChanges();
  }

  ngOnChanges(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  

  showUser(rowData:any){
    this.router.navigate(['/user',JSON.stringify(rowData)]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Position + 1}`;
  }

  getUserList(){
    this.gridService.getUserList().subscribe(res => {
      this.userList = res;
      for(let i = 0; i < this.userList.length; i++){
        this.userList[i].Landline = this.userList[i]['Land-line'];
        this.userList[i].Position = i + 1;
        delete this.userList[i]['Land-line'];
    }
      this.dataSource = new MatTableDataSource<User>(this.userList);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    })
  }

  exportToCsv() {
    let data = this.selection.selected;
    const replacer = (key:any, value:any) => (value === null ? '' : value);
    const header =this.displayedColumns;
    const csv = data.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'Users.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
