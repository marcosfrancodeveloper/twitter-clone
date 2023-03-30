import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgxPostModule, NgxTweetModule } from '@decskill-lib/ngx-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfiniteScrollModule,
    NgxTweetModule,
    NgxPostModule
  ]
})
export class DashboardModule { }
