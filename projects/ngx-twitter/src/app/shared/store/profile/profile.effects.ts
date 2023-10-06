import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromProfileAction from './profile.actions';

import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { IProfile } from '@twitter-lib/ngx-domain';
import { ProfileAPI } from '@twitter-lib/ngx-api';

@Injectable()
export class ProfileEffect {

  /**
   * CONSTRUCTOR
   * @param _actions$
   * @param _profileApi
   */
  constructor(
    private _actions$: Actions,
    private _profileApi: ProfileAPI
  ) { }

  loadProfiles$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromProfileAction.ProfileTypeActions.LOAD),
      exhaustMap((param: any) =>
        this._profileApi.getAll(param.path, param.params)
          .pipe(
            map((payload: IProfile[]) =>
              fromProfileAction.LoadProfilesSuccess({ payload }),
              catchError(error => of(fromProfileAction.LoadProfilesFail({ error })))
            )
          )
      )
    )
  );

  loadProfile$ = createEffect(
    () => this._actions$.pipe(
      ofType(fromProfileAction.ProfileTypeActions.BY),
      exhaustMap((param: any) =>
        this._profileApi.get(param.path, param.params)
          .pipe(
            map((payload: IProfile) =>
              fromProfileAction.ByProfileSuccess({ payload }),
              catchError(error => of(fromProfileAction.ByProfileFail({ error })))
            )
          )
      )
    )
  );
}
