import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './component/foto/gallery/gallery.component';
import { AmgalleryComponent } from './component/amgallery/amgallery.component';
import { DragulaTestComponent } from './component/dragula-test/dragula-test.component';
import { HomeComponent } from './home/home.component';
import { Md1Component } from './component/md1/md1.component';
import { MatTab } from '@angular/material';
import { MdTableComponent } from './component/md-table/md-table.component';
import { Mdtab2Component } from './component/mdtab2/mdtab2.component';
import { EventsComponent } from './component/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'ekgallery', component: GalleryComponent },
  { path: 'amgallery', component: AmgalleryComponent },
  { path: 'dragula', component: DragulaTestComponent },
  { path: 'material', component: Md1Component },
  { path: 'mdtab', component: MdTableComponent },
  { path: 'mdtab2', component: Mdtab2Component },
  { path: 'customers', loadChildren: 'src/app/customers/customers.module#CustomersModule' },  // absolute path
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },                    // relative path
  { path: 'rxjs', loadChildren: 'src/app/component/rxjs/rxjs.module#RxjsModule' },            // absolute path
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
