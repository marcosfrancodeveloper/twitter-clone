import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractAPI, IEnvironment, IProfile, PathParams, Profile } from '@decskill-lib/ngx-domain';
import { ProfileQueryParams } from '.';

@Injectable({
  providedIn: 'root'
})
export class ProfileAPI extends AbstractAPI<IProfile> {
  protected endpoint = '/profiles';
  protected url = this._environment.backendUrl + this.endpoint;

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   * @param _environment: IEnvironment
   */
  constructor(
    injector: Injector,
    @Inject('environment') private _environment: IEnvironment
  ) {
    super(injector);
  }

  get(pathParams?: PathParams, queryParams?: ProfileQueryParams): Observable<IProfile> {
    return super
      .getGeneric<IProfile>(pathParams, queryParams)
      .pipe(map((rawData: IProfile) => new Profile(rawData)));
  }

  getAll(pathParams?: PathParams, queryParams?: ProfileQueryParams): Observable<Array<IProfile>> {
    return super.getListGeneric<IProfile>(pathParams, queryParams).pipe(
      map((rawData: Array<IProfile>) => rawData.map((page: IProfile) => new Profile(page)))
    );
  }
}
