import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPostState } from "./post.reducer";

const getPostsFeatureState = createFeatureSelector<IPostState>('posts');
export const getPosts = createSelector(getPostsFeatureState, (state: IPostState) => state.posts);
export const getPost = createSelector(getPostsFeatureState, (state: IPostState) => state.post);
