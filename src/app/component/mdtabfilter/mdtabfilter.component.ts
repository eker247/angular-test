import {Component, OnInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'mdtabfilter.component.html'
})
export class MdtabfilterComponent implements OnInit {
  version = VERSION;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  tab = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
    this.tab.filterPredicate = (filter: string) => {
      return true;
    }
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.position + data.details.name + data.details.symbol + data.details.weight;
      return dataStr.indexOf(filter) != -1; 
    }
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

const ELEMENT_DATA: Element[] = [
  {position: 1, details: { name: 'Hydrogen', weight: 1.0079, symbol: 'H'}},
  {position: 2, details: { name: 'Helium', weight: 4.0026, symbol: 'He'}},
  {position: 3, details: { name: 'Lithium', weight: 6.941, symbol: 'Li'}},
  {position: 4, details: { name: 'Beryllium', weight: 9.0122, symbol: 'Be'}},
  {position: 5, details: { name: 'Boron', weight: 10.811, symbol: 'B'}},
  {position: 6, details: { name: 'Carbon', weight: 12.0107, symbol: 'C'}},
  {position: 7, details: { name: 'Nitrogen', weight: 14.0067, symbol: 'N'}},
  {position: 8, details: { name: 'Oxygen', weight: 15.9994, symbol: 'O'}},
  {position: 9, details: { name: 'Fluorine', weight: 18.9984, symbol: 'F'}},
  {position: 10, details: { name: 'Neon', weight: 20.1797, symbol: 'Ne'}},
  {position: 11, details: { name: 'Sodium', weight: 22.9897, symbol: 'Na'}},
  {position: 12, details: { name: 'Magnesium', weight: 24.305, symbol: 'Mg'}},
  {position: 13, details: { name: 'Aluminum', weight: 26.9815, symbol: 'Al'}},
  {position: 14, details: { name: 'Silicon', weight: 28.0855, symbol: 'Si'}},
  {position: 15, details: { name: 'Phosphorus', weight: 30.9738, symbol: 'P'}},
  {position: 16, details: { name: 'Sulfur', weight: 32.065, symbol: 'S'}},
  {position: 17, details: { name: 'Chlorine', weight: 35.453, symbol: 'Cl'}},
  {position: 18, details: { name: 'Argon', weight: 39.948, symbol: 'Ar'}},
  {position: 19, details: { name: 'Potassium', weight: 39.0983, symbol: 'K'}},
  {position: 20, details: { name: 'Calcium', weight: 40.078, symbol: 'Ca'}},
];

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */