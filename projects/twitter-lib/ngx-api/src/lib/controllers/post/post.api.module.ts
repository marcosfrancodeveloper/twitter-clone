import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { IEnvironment } from '@twitter-lib/ngx-domain';
import { PostAPI } from ".";

@NgModule({
  imports: [HttpClientModule]
})
export class PostAPIModule {
  public static forRoot(environment: IEnvironment): ModuleWithProviders<PostAPIModule> {
    return {
      ngModule: PostAPIModule,
      providers: [
        PostAPI,
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
