import { Component, OnInit } from '@angular/core';
import { Image as Img }  from '../image';
import {
  // AccessibilityConfig,
  // Action,
  // AdvancedLayout,
  // ButtonEvent,
  // ButtonsConfig,
  // ButtonsStrategy,
  // ButtonType,
  // Description,
  // DescriptionStrategy,
  // DotsConfig,
  GalleryService,
  // GridLayout,
  Image,
  // ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  // PreviewConfig
} from '@ks89/angular-modal-gallery';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { VERSION } from '@angular/forms';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-amgallery',
  templateUrl: './amgallery.component.html',
  styleUrls: ['./amgallery.component.css']
})
export class AmgalleryComponent implements OnInit {
  
    imageIndex = 1;
    galleryId = 1;
    images: Image[] = [];
    showImgNumber = Number.MAX_SAFE_INTEGER;

  ngOnInit() {
    this.getImages();
  }

  name: string;

  constructor(
    private imagesService: ImagesService,
    private galleryService: GalleryService,
    private sanitizer: DomSanitizer
  ) {
    this.name = `${VERSION.full}`;
    let img = new Image(1, {img: ""});
  }

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout(
      { width: '80px', height: '80px' }, 
      { length: this.showImgNumber, wrap: true }, 
      'flex-start'
    )
  };

  getImages() {
    let img: Img[];
    this.imagesService.getImages().subscribe(
      images => img = images
    );
    for (let i = 0; i < img.length; ++i) {
      this.images[i] = new Image(i, { img: img[i].img });
    };
  }
}
