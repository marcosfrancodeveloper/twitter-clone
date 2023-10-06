import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPostComponent } from './ngx-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxPostComponent],
  exports: [NgxPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class NgxPostModule { }
