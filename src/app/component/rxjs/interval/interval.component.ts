import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.testInterval();
  }

  testInterval() {
    // const interval$ = interval(1000);
    const interval$ = timer(3000, 1000);
    const subInt = interval$.subscribe(val => console.log('stream: ', val)); 

    const click$ = fromEvent(document, 'click');
    click$.subscribe(val => console.log('click: ', val));

    setTimeout(() => subInt.unsubscribe(), 6000);
  }

}
