import { Injectable } from '@angular/core';
import { Observable, of, fromEventPattern } from 'rxjs';

import { Image } from "../model/image";
import { IMAGES } from "../mock-server/images-mock";
import { ProductMockServer } from '../mock-server/product-mock';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private productService: ProductService) { }

  getImages(): Observable<Image[]> {
    let images = new Array<Image>();
    // this.productService.getProductDetails().subscribe(
    //   item => item.img.forEach(it => {
    //     images.push({ name: item.name, img: it });
    //   })
    // );

    return of(images);
  }
}
