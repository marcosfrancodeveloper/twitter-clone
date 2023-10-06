import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxNavbarComponent } from './ngx-navbar.component';
import { NgxBreadcrumbModule } from '../ngx-breadcrumb/ngx-breadcrumb.module';
import { NgxUserPanelModule } from '../ngx-user-panel/ngx-user-panel.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [NgxNavbarComponent],
  exports: [NgxNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    NgxBreadcrumbModule,
    NgxUserPanelModule
  ]
})
export class NgxNavbarModule { }
