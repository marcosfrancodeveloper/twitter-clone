import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { IEnvironment } from '@decskill-lib/ngx-domain';
import { ProfileAPI } from ".";

@NgModule({
  imports: [HttpClientModule]
})
export class ProfileAPIModule {
  public static forRoot(environment: IEnvironment): ModuleWithProviders<ProfileAPIModule> {
    return {
      ngModule: ProfileAPIModule,
      providers: [
        ProfileAPI,
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
