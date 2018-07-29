import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MdTableDataSource } from './md-table-datasource';

@Component({
  selector: 'app-component/md-table',
  templateUrl: './md-table.component.html',
  styleUrls: ['./md-table.component.css']
})
export class MdTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MdTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'shortcut'];

  ngOnInit() {
    this.dataSource = new MdTableDataSource(this.paginator, this.sort);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
