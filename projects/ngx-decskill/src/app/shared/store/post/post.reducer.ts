import { IPost } from "@decskill-lib/ngx-domain";
import { Action, createReducer, on } from "@ngrx/store";
import * as fromPostActions from "./post.actions";

export interface IPostState {
  posts: IPost[],
  post: IPost | null,
  error: Error | null
}

export const initialState: IPostState = {
  posts: [],
  post: null,
  error: null
}

const _postsReducer = createReducer(
  initialState,
  on(fromPostActions.LoadPostsSuccess, (state, { payload }) => ({
    ...state,
    posts: payload,
    error: null
  })),
  on(fromPostActions.LoadPostsFail, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(fromPostActions.LoadPaginablePostsSuccess, (state, { payload }) => ({
    ...state,
    posts: [...state.posts, ...payload],
    error: null
  })),
  on(fromPostActions.LoadPaginablePostsFail, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(fromPostActions.ByPostSuccess, (state, { payload }) => ({
    ...state,
    post: payload,
    error: null
  })),
  on(fromPostActions.ByPostFail, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(fromPostActions.CreatePostSuccess, (state, { payload }) => ({
    ...state,
    posts: [...state.posts, payload],
    error: null
  })),
  on(fromPostActions.CreatePostFail, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(fromPostActions.UpdatePostSuccess, (state, { payload }) => ({
    ...state,
    posts: [...state.posts].map((row) => row.id == payload.id ? payload : row),
    error: null
  })),
  on(fromPostActions.UpdatePostFail, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(fromPostActions.DeletePostSuccess, (state, { payload }) => ({
    ...state,
    posts: [...state.posts].filter((row) => row.id != payload.id),
    error: null
  })),
  on(fromPostActions.DeletePostFail, (state, { error }) => ({
    ...state,
    error: error
  })),
);

export function postsReducer(state: IPostState = initialState, action: Action) {
  return _postsReducer(state, action);
}
