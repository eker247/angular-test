import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsNames: string[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductsNames();
  }

  getProductsNames(): void {
    this.productService.getProductsNames().subscribe(
      pr => this.productsNames = pr
    );  
  }

  chooseProduct(productName: string): void {
    this.productService.chooseProduct(productName);
  }
}
