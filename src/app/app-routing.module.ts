import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './component/foto/gallery/gallery.component';
import { AmgalleryComponent } from './component/amgallery/amgallery.component';
import { DragulaTestComponent } from './component/dragula-test/dragula-test.component';

const routes: Routes = [
  { path: 'ekgallery', component: GalleryComponent },
  { path: 'amgallery', component: AmgalleryComponent },
  { path: 'dragula', component: DragulaTestComponent },
  { path: 'customers', loadChildren: 'src/app/customers/customers.module#CustomersModule' },  // absolute path
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' }                     // relative path
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
