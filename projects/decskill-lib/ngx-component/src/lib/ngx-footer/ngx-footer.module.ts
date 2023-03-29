import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxFooterComponent } from './ngx-footer.component';

@NgModule({
  declarations: [NgxFooterComponent],
  exports: [NgxFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NgxFooterModule { }
