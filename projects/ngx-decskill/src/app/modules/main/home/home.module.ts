import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxPostModule, NgxTweetModule } from '@decskill-lib/ngx-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    NgxTweetModule,
    NgxPostModule
  ]
})
export class HomeModule { }
