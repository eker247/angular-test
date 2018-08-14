import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuLinks: menuLink[] = [
    { mlLink: '', mlName: 'home', mlClass: 'btn' },
    { mlLink: '/events', mlName: 'events', mlClass: 'btn' },
    { mlLink: '/ekgallery', mlName: 'ekgallery', mlClass: 'btn' },
    { mlLink: '/amgallery', mlName: 'amgallery', mlClass: 'btn' },
    { mlLink: '/dragula', mlName: 'dragula', mlClass: 'btn' },
    { mlLink: '/customers', mlName: 'customers', mlClass: 'btn' },
    { mlLink: '/orders', mlName: 'orders', mlClass: 'btn' },
    { mlLink: '/material', mlName: 'material', mlClass: 'btn' },
    { mlLink: '/mdtab', mlName: 'mdTable1', mlClass: 'btn' },
    { mlLink: '/mdtab2', mlName: 'mdTable2', mlClass: 'btn' },
  ];

  constructor() { }

  ngOnInit() {
  }

  choose(ml: menuLink) {
    this.menuLinks.forEach(item => {
      if (item == ml) {
        item.mlClass = "btn btn-primary";
      }
      else {
        item.mlClass = "btn";
      }
    });
  }

}

class menuLink {
  mlLink: string;
  mlName: string;
  mlClass: string;

  constructor(mlLink: string, btName: string, mlClass: string = "btn") {
    this.mlLink = mlLink;
    this.mlName = this.mlName;
    this.mlClass = this.mlClass;
  }
}

