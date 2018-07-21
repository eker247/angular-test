import { Injectable } from '@angular/core';
import { Observable, of, fromEventPattern } from 'rxjs';

import { Image } from "./image";
import { IMAGES } from "./images-mock";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImages(): Observable<Image[]> {
    return of(IMAGES);
  }
}
