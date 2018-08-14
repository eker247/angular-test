import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { IntervalComponent } from './interval/interval.component';

@NgModule({
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  declarations: [IntervalComponent]
})
export class RxjsModule { }
