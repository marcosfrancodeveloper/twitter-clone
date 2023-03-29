import { ActionReducerMap } from "@ngrx/store";
import { PostEffect } from "./post/post.effects";
import { IPostState, postsReducer } from "./post/post.reducer";
import { ProfileEffect } from "./profile/profile.effects";
import { IProfileState, profilesReducer } from "./profile/profile.reducer";

export interface AppState {
  profiles: IProfileState,
  posts: IPostState
}

export const appReducer: ActionReducerMap<AppState> = {
  profiles: profilesReducer,
  posts: postsReducer
}

export const appEffects = [
  ProfileEffect,
  PostEffect
];
