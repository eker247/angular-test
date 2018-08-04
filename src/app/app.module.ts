import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DragulaModule } from 'ng2-dragula';

import 'mousetrap';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Md1Component } from './component/md1/md1.component';
import { GalleryComponent } from './component/foto/gallery/gallery.component';
import { AmgalleryComponent } from './component/amgallery/amgallery.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { DragulaTestComponent } from './component/dragula-test/dragula-test.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MdTableComponent } from './component/md-table/md-table.component';
import { 
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckbox,
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { Mdtab2Component } from './component/mdtab2/mdtab2.component';

@NgModule({
  declarations: [
    AppComponent,
    Md1Component,
    GalleryComponent,
    AmgalleryComponent,
    ProductListComponent,
    DragulaTestComponent,
    MenuComponent,
    HomeComponent,
    Md1Component,
    MdTableComponent,
    Mdtab2Component
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      AppRoutingModule,
      ModalGalleryModule.forRoot(),
      DragulaModule.forRoot(),
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCardModule,
      MatCheckboxModule,
      MatInputModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}


