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
