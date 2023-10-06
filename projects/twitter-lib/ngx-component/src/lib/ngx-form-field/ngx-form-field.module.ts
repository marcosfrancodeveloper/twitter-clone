import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxFormFieldComponent } from './ngx-form-field.component';

@NgModule({
  declarations: [NgxFormFieldComponent],
  exports: [NgxFormFieldComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NgxFormFieldModule { }
