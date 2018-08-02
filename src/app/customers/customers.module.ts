import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { 
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckbox,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [
    CustomerListComponent,
  ]
})
export class CustomersModule { }
