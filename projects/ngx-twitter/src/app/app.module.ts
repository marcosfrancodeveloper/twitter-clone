import { HttpClientModule } from '@angular/common/http';
import { NgModuleRef } from '@angular/core';
import { ApplicationInitStatus, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createInjector_component, InjectorComponent } from './injector.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appEffects, appReducer } from './shared/store/app.state';
import { ProfileAPIModule } from '@twitter-lib/ngx-api';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InjectorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ProfileAPIModule.forRoot(environment),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument(),
  ]
})
export class AppModule {
  constructor(module: NgModuleRef<AppModule>, initStatus: ApplicationInitStatus) {
    initStatus.donePromise.then(() => {
      const injector = createInjector_component(module);
      const el = createCustomElement(AppComponent, { injector });
      customElements.define('ngx-twitter', el);
    });
  }

  ngDoBootstrap(): void {}
}
