import { Component, OnInit, Input } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  chosenProduct: Product;
  images: Image[];
  chosenImage: Image;
  isFullScreen: boolean;
  currentWidth: string;
  smallImgViewer: string = "20%";
  bigImgViewer: string = "100%";
  imageSubscription: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.images = [];
    this.isFullScreen = false;
    this.currentWidth = "200";
    this.getImageSubscription();
    this.getImages();
  }

  getImageSubscription() {
    this.imageSubscription = this.productService.chosenProduct$.subscribe(
      it => this.images = it
    );
  }

  getImages(): void {
    if (this.images.length || !this.productService.chosenProduct) {
      return;
    }
    this.productService.getImages().subscribe(images => this.images = images);
  }

  onImageClick(img: Image): void {
    this.chosenImage = img;
    if (this.isFullScreen) {
      this.imgChangeSize();
    }
    this.isFullScreen = false;
  }

  imgFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this.imgChangeSize();
  }

  imgChangeSize() {
    if (this.isFullScreen) {
      document.getElementById("imgWindow").style.width = this.bigImgViewer;
    }
    else {
      document.getElementById("imgWindow").style.width = this.smallImgViewer;
    }
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }
}
