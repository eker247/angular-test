import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of, Subject } from 'rxjs';
import { ProductMockServer } from '../mock-server/product-mock';
import { Image } from '@ks89/angular-modal-gallery';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productServer = new ProductMockServer();

  private chosenProductSource = new Subject<Image[]>();
  chosenProduct$ = this.chosenProductSource.asObservable();
  chosenProduct: string;

  constructor() { }

  // return list of products' names
  getProductsNames(): Observable<string[]> {
    return of(this.productServer.getProductsNames());
  }

  private prGetImages(): Image[] {
    let prod = this.productServer.getProductDetails(this.chosenProduct);
    // alert(prod.img[0]);
    let images = new Array<Image>();
    let i = 0;
    prod.img.forEach((it: string) => {
      images.push(new Image(i++, { img: it }))
    });
    return images;
  }
  // return product with images
  getImages(): Observable<Image[]> {
    return of(this.prGetImages());
  }

  chooseProduct(productName: string): void {
    this.chosenProduct = productName;
    this.chosenProductSource.next(this.prGetImages());
  }
}
