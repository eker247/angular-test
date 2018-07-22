import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of, Subject } from 'rxjs';
import { ProductMockServer } from '../mock-server/product-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productServer = new ProductMockServer();

  private chosenProductSource = new Subject<Product>();
  chosenProduct$ = this.chosenProductSource.asObservable();
  chosenProduct: Product;

  constructor() { }

  // return list of products' names
  getProductsNames(): Observable<Product[]> {
    return of(this.productServer.getProductsNames());
  }

  // return product with images
  getProductDetails(): Observable<Product> {
    let prod = this.productServer.getProductDetails(this.chosenProduct);
    this.chosenProductSource.next(prod);
    return of(prod);
  }

  chooseProduct(product: Product): void {
    this.chosenProduct = product;
    this.getProductDetails();
  }
}
