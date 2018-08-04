import { Component, OnInit, ViewChild } from '@angular/core';
import {VERSION} from '@angular/material';
import { MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-mdtab2',
  templateUrl: './mdtab2.component.html',
  styleUrls: ['./mdtab2.component.css']
})
export class Mdtab2Component implements OnInit {
  version = VERSION;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data, filter) => {
      let dataStr = data.name + data.symbol + data.weight;
      return dataStr.indexOf(filter) != -1;
    }
    alert(Object.getOwnPropertyNames(this.dataSource));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  position: number;
  details: ElementDetails;
}

export interface ElementDetails {
  name: string;  
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: ElementDetails[] = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  { name: 'Helium', weight: 4.0026, symbol: 'He'},
  { name: 'Lithium', weight: 6.941, symbol: 'Li'},
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  { name: 'Boron', weight: 10.811, symbol: 'B'},
  { name: 'Carbon', weight: 12.0107, symbol: 'C'},
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  { name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  { name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  { name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  { name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  { name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  { name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  { name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  { name: 'Sulfur', weight: 32.065, symbol: 'S'},
  { name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  { name: 'Argon', weight: 39.948, symbol: 'Ar'},
  { name: 'Potassium', weight: 39.0983, symbol: 'K'},
  { name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
