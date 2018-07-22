import { Component, OnInit } from '@angular/core';
import {
  GalleryService,
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';

import { DomSanitizer } from '@angular/platform-browser';
import { VERSION } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-amgallery',
  templateUrl: './amgallery.component.html',
  styleUrls: ['./amgallery.component.css']
})
export class AmgalleryComponent implements OnInit {
  
  imageIndex = 1;
  galleryId = 1;
  images: Image[];
  showImgNumber = Number.MAX_SAFE_INTEGER;
  imageSubscription: Subscription;
  name: string;
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout(
      { width: '80px', height: '80px' }, 
      { length: this.showImgNumber, wrap: true }, 
      'flex-start'
    )
  };

  constructor(
    private productService: ProductService,
    private galleryService: GalleryService,
    private sanitizer: DomSanitizer
  ) {
    this.name = `${VERSION.full}`;
    let img = new Image(1, {img: ""});
  }
  
  ngOnInit() {
    this.images = [];
    this.getImageSubscription();
    this.getImages();
  }
  
  getImageSubscription() {
    this.productService.chosenProduct$.subscribe(it => this.images = it);
  }

  getImages() {
    if (this.images.length || !this.productService.chosenProduct) {
      return;
    }
    this.productService.getImages().subscribe(it => this.images = it);
  }
  
  ngOnDestroy() {
    if (this.imageSubscription) {
      this.imageSubscription.unsubscribe();
    }
  }
}
