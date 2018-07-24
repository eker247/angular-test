import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragula-test',
  templateUrl: './dragula-test.component.html',
  styleUrls: ['./dragula-test.component.css']
})
export class DragulaTestComponent implements OnInit {

  nums: number[] = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
  }

}
