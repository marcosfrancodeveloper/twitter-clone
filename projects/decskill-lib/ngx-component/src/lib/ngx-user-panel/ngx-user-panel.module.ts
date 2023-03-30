import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxUserPanelComponent } from './ngx-user-panel.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [NgxUserPanelComponent],
  exports: [NgxUserPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule
  ]
})
export class NgxUserPanelModule { }
