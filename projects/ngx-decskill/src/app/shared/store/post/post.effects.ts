import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPostAction from './post.actions';

import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { IPost } from '@decskill-lib/ngx-domain';
import { PostAPI } from '@decskill-lib/ngx-api';

@Injectable()
export class PostEffect {

  /**
   * CONSTRUCTOR
   * @param _actions$
   * @param _postApi
   */
  constructor(
    private _actions$: Actions,
    private _postApi: PostAPI
  ) { }

  loadPosts$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromPostAction.PostTypeActions.LOAD),
      exhaustMap((param: any) =>
        this._postApi.getAll(param?.path, param?.params)
          .pipe(
            map((payload: IPost[]) =>
              fromPostAction.LoadPostsSuccess({ payload }),
              catchError(error => of(fromPostAction.LoadPostsFail({ error })))
            )
          )
      )
    )
  );

  loadPaginablePosts$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromPostAction.PostTypeActions.LOAD_PAGINABLE),
      exhaustMap((param: any) =>
        this._postApi.getAll(param?.path, param?.params)
          .pipe(
            map((payload: IPost[]) =>
              fromPostAction.LoadPaginablePostsSuccess({ payload }),
              catchError(error => of(fromPostAction.LoadPaginablePostsFail({ error })))
            )
          )
      )
    )
  );

  loadPost$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromPostAction.PostTypeActions.BY),
      exhaustMap((param: any) =>
        this._postApi.get(param.path, param.params)
          .pipe(
            map((payload: IPost) =>
              fromPostAction.ByPostSuccess({ payload }),
              catchError(error => of(fromPostAction.ByPostFail({ error })))
            )
          )
      )
    )
  );

  createPost$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromPostAction.PostTypeActions.CREATE),
      exhaustMap((param: any) =>
        this._postApi.create(param.payload)
          .pipe(
            map((payload: IPost) =>
              fromPostAction.CreatePostSuccess({ payload }),
              catchError(error => of(fromPostAction.CreatePostFail({ error })))
            )
          )
      )
    )
  );

  /*updatePost$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromPostAction.PostTypeActions.UPDATE),
      exhaustMap((param: any) =>
        this._postApi.update(param.payload)
          .pipe(
            map((payload: IPost) =>
              fromPostAction.UpdatePostSuccess({ payload }),
              catchError(error => of(fromPostAction.UpdatePostFail({ error })))
            )
          )
      )
    )
  );*/

  deletePost$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromPostAction.PostTypeActions.DELETE),
      exhaustMap((param: any) =>
        this._postApi.delete(param.payload)
          .pipe(
            map(() =>
              fromPostAction.DeletePostSuccess({ payload: param.payload }),
              catchError(error => of(fromPostAction.DeletePostFail({ error })))
            )
          )
      )
    )
  );
}
