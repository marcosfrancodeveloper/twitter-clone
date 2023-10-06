import { IProfile } from "@twitter-lib/ngx-domain";
import { Action, createReducer, on } from "@ngrx/store";
import * as fromProfileActions from "./profile.actions";

export interface IProfileState {
  profiles: IProfile[],
  profile: IProfile | null,
  error: Error | null
}

export const initialState: IProfileState = {
  profiles: [],
  profile: null,
  error: null
}

const _profilesReducer = createReducer(
  initialState,
  on(fromProfileActions.LoadProfilesSuccess, (state, { payload }) => ({
    ...state,
    profiles: payload,
    error: null
  })),
  on(fromProfileActions.LoadProfilesFail, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(fromProfileActions.ByProfileSuccess, (state, { payload }) => ({
    ...state,
    profile: payload,
    error: null
  })),
  on(fromProfileActions.ByProfileFail, (state, { error }) => ({
    ...state,
    error: error
  }))
);

export function profilesReducer(state: IProfileState = initialState, action: Action) {
  return _profilesReducer(state, action);
}
