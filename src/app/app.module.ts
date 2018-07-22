import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Md1Component } from './component/md1/md1.component';
import { GalleryComponent } from './component/foto/gallery/gallery.component';
import { AmgalleryComponent } from './component/amgallery/amgallery.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  { path: 'ekgallery', component: GalleryComponent },
  { path: 'amgallery', component: AmgalleryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Md1Component,
    GalleryComponent,
    AmgalleryComponent,
    ProductListComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatInputModule,
      AppRoutingModule,
      RouterModule.forRoot(routes),
      ModalGalleryModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}


