import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MdTableDataSource } from './md-table-datasource';
import { DataSource } from '@angular/cdk/collections';

export class Test {
  value: string;
  constructor(s: string = '') {
    this.value = s;
  }
}

@Component({
  selector: 'app-component/md-table',
  templateUrl: './md-table.component.html',
  styleUrls: ['./md-table.component.css']
})
export class MdTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MdTableDataSource;
  filter: string;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'shortcut'];

  ngOnInit() {
    let tab: Test[] = [
      { value: "a" },
      { value: "b" }
    ];

    let ds = new DataSource<Test>(tab);
    
    ds.forEach(e => {
      alert(e.value);
    });

    this.dataSource = new MdTableDataSource(this.paginator, this.sort, );
    // this.dataSource.filterPredicate = (this.dataSource, filter) => {
    //   return true;
    // }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
