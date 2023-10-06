import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import {
  NgxAsideModule,
  NgxNavbarModule,
  NgxUserPanelModule,
  NgxFooterModule
} from '@twitter-lib/ngx-component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    HttpClientModule,
    MainRoutingModule,
    NgxAsideModule,
    NgxNavbarModule,
    NgxUserPanelModule,
    NgxFooterModule
  ]
})
export class MainModule {}
