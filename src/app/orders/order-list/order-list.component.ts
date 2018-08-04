import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

export interface Imyform {
  word1: string;
  level1: IL1[];
}

export interface IL1 {
  word2: string;
  level2: IL2[];
}

export interface IL2 {
  word3: string;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public myform: FormGroup; // our myform model

  // we will use myform builder to simplify our syntax
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.init1();
  }

  init1() {
    this.myform = this._fb.group({
      word1: ['', Validators.required],
      level1: this._fb.array([
        this.init2()
      ])
    });
  }

  init2() {
    return this._fb.group({
      word2: [],
      level2: this._fb.array([
        this.init3()
      ])
    });
  }

  init3() {
    return this._fb.group({
      word3: []
    });
  }

  addLevel(l, num) {
    const ctrl = <FormArray>l.controls['level' + num];
    if (num === 1) {
      ctrl.push(this.init2());
    } else {
      ctrl.push(this.init3());
    }
  }

  rmLevel(l, num, iter) {
    const ctrl = <FormArray>l.controls['level' + num];
    ctrl.removeAt(iter);
  }

  submit(myform) {
    const imf: Imyform = myform.value;
    console.log(imf);
  }

  show(form: Imyform) {
    console.log('w1: ' + form.word1);
    form.level1.forEach(l1 => {
      console.log('w2: ' + l1.word2);
      l1.level2.forEach(l2 => {
        console.log(l2.word3);
      });
    });
  }
}

export interface Element {
  position: number;
  details: {
    name: string;
    weight: number;
    symbol: string;
  };
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
