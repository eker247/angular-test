import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';
import { ImagesService } from '../../images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  images: Image[];
  chosenImage: Image;
  isFullScreen: boolean;
  currentWidth: string;
  smallImgViewer: string = "20%";
  bigImgViewer: string = "100%";

  constructor(private imagesService: ImagesService) { 
    this.getImages();
  }

  ngOnInit() {
    this.isFullScreen = false;
    this.currentWidth = "200";
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
