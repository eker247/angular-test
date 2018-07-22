import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Subscription, of, Observable } from 'rxjs';
import { Image } from '../model/image';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductsNames();
  }

  getProductsNames() {
    this.productService.getProductsNames().subscribe(
      pr => this.products = pr
    );  
  }

  chooseProduct(product: Product): void {
    this.productService.chooseProduct(product);
  }
}
