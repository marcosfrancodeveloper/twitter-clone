import { ProfileQueryParams } from "@twitter-lib/ngx-api";
import { IProfile, PathParams } from "@twitter-lib/ngx-domain";
import { createAction, props } from "@ngrx/store";

export const enum ProfileTypeActions {
  // All
  LOAD = '[LOAD] Carregamento de listagem de usuários',
  LOAD_SUCCESS = '[LOAD_SUCCESS] Carregamento de listagem de usuários com sucesso',
  LOAD_FAIL = '[LOAD_FAIL] Carregamento de listagem de usuários com falha',

  // GetById
  BY = '[BY] Carregamento de usuário',
  BY_SUCCESS = '[BY_SUCCESS] Carregamento de usuário com sucesso',
  BY_FAIL = '[BY_FAIL] Carregamento de usuário com falha'
}

// All
export const LoadProfiles = createAction(ProfileTypeActions.LOAD, props<{ path?: PathParams, params?: ProfileQueryParams, customUrl?: string }>());
export const LoadProfilesSuccess = createAction(ProfileTypeActions.LOAD_SUCCESS, props<{ payload: IProfile[] }>());
export const LoadProfilesFail = createAction(ProfileTypeActions.LOAD_FAIL, props<{ error: Error }>());

// GetById
export const ByProfile = createAction(ProfileTypeActions.BY, props<{ path?: PathParams, params?: ProfileQueryParams, customUrl?: string }>());
export const ByProfileSuccess = createAction(ProfileTypeActions.BY_SUCCESS, props<{ payload: IProfile }>());
export const ByProfileFail = createAction(ProfileTypeActions.BY_FAIL, props<{ error: Error }>());
