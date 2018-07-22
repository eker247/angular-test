import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../model/image';
import { ImagesService } from '../../service/images.service';
import { Product } from '../../model/product';
import { ProductMockServer } from '../../mock-server/product-mock';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  chosenProduct: Product;
  images = new Array<Image>();
  chosenImage: Image;
  isFullScreen: boolean;
  currentWidth: string;
  smallImgViewer: string = "20%";
  bigImgViewer: string = "100%";
  subscription: Subscription;

  constructor(
    private imagesService: ImagesService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.isFullScreen = false;
    this.currentWidth = "200";
    this.getSubscribe();
  }

  getSubscribe() {
    this.subscription = this.productService.chosenProduct$.subscribe(
      it => {
        // alert("working with " + it.name);
        this.images = [];
        it.img.forEach(
          (i: string) => {
            this.images.push(new Image(it.name, i));
          }
        );
        // alert(" fetched in gallery component");
      }
    );
  }


  getImages(): void {
    this.imagesService.getImages().subscribe(
      images => this.images = images
    );
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
}
