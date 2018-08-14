import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.testing();
  }

  testing() {
    let t = new TClass('aaa');
    console.log(t.getProp());
    t.prop = 'bbb';
    console.log(t.getProp());
    t.setProp({ prop: 'ccc'})
    console.log(t.getProp());
  }
}

class TClass {
  prop: string;

  constructor(str: string) {
    this.prop = str;
  }

  getProp() {
    return this.prop;
  }

  setProp(data: { prop: string} ) {
    this.prop = data.prop;
  }
}