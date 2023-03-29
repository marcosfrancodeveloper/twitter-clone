import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxTweetComponent } from './ngx-tweet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormFieldModule } from '../ngx-form-field';

@NgModule({
  declarations: [NgxTweetComponent],
  exports: [NgxTweetComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxFormFieldModule
  ]
})
export class NgxTweetModule { }
