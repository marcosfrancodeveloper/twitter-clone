import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxAlertComponent } from './ngx-alert.component';

@NgModule({
  declarations: [NgxAlertComponent],
  exports: [NgxAlertComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NgxAlertModule { }
