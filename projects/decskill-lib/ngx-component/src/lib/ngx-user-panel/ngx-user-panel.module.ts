import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxUserPanelComponent } from './ngx-user-panel.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [NgxUserPanelComponent],
  exports: [NgxUserPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    PerfectScrollbarModule
  ]
})
export class NgxUserPanelModule { }
