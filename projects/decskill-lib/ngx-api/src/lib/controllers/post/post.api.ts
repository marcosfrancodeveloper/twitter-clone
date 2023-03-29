import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractAPI, IEnvironment, IPost, PathParams, Post } from '@decskill-lib/ngx-domain';
import { PostQueryParams } from '.';

@Injectable({
  providedIn: 'root'
})
export class PostAPI extends AbstractAPI<IPost> {
  protected endpoint = '/posts';
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

  get(pathParams?: PathParams, queryParams?: PostQueryParams): Observable<IPost> {
    return super
      .getGeneric<IPost>(pathParams, queryParams)
      .pipe(map((rawData: IPost) => new Post(rawData)));
  }

  getAll(pathParams?: PathParams, queryParams?: PostQueryParams): Observable<Array<IPost>> {
    return super.getListGeneric<IPost>(pathParams, queryParams).pipe(
      map((rawData: Array<IPost>) => rawData.map((page: IPost) => new Post(page)))
    );
  }

  create(entity: IPost, queryParams?: PostQueryParams): Observable<IPost> {
    return super.postGeneric(entity, undefined, queryParams);
  }

  delete(queryParams?: PostQueryParams): Observable<void> {
    return super.deleteGeneric(queryParams);
  }
}
