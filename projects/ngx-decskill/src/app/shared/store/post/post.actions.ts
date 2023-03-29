import { PostQueryParams } from "@decskill-lib/ngx-api";
import { IPost, PathParams } from "@decskill-lib/ngx-domain";
import { createAction, props } from "@ngrx/store";

export const enum PostTypeActions {
  // All
  LOAD = '[LOAD] Carregamento de listagem de postagens',
  LOAD_SUCCESS = '[LOAD_SUCCESS] Carregamento de listagem de postagens com sucesso',
  LOAD_FAIL = '[LOAD_FAIL] Carregamento de listagem de postagens com falha',

  // GetById
  BY = '[BY] Carregamento de postagem',
  BY_SUCCESS = '[BY_SUCCESS] Carregamento de postagem com sucesso',
  BY_FAIL = '[BY_FAIL] Carregamento de postagem com falha',

  // Create
  CREATE = '[CREATE] Criação de postagem',
  CREATE_SUCCESS = '[CREATE_SUCCESS] Criação de postagem com sucesso',
  CREATE_FAIL = '[CREATE_FAIL] Criação de postagem com falha',

  // Update
  UPDATE = '[UPDATE] Atualização de postagem',
  UPDATE_SUCCESS = '[UPDATE_SUCCESS] Atualização de postagem com sucesso',
  UPDATE_FAIL = '[UPDATE_FAIL] Atualização de postagem com falha',

  // Delete
  DELETE = '[DELETE] Remoção de postagem',
  DELETE_SUCCESS = '[DELETE_SUCCESS] Remoção de postagem com sucesso',
  DELETE_FAIL = '[DELETE_FAIL] Remoção de postagem com falha',
}

// All
export const LoadPosts = createAction(PostTypeActions.LOAD, props<{ path?: PathParams, params?: PostQueryParams, customUrl?: string }>());
export const LoadPostsSuccess = createAction(PostTypeActions.LOAD_SUCCESS, props<{ payload: IPost[] }>());
export const LoadPostsFail = createAction(PostTypeActions.LOAD_FAIL, props<{ error: Error }>());

// GetById
export const ByPost = createAction(PostTypeActions.BY, props<{ path?: PathParams, params?: PostQueryParams, customUrl?: string }>());
export const ByPostSuccess = createAction(PostTypeActions.BY_SUCCESS, props<{ payload: IPost }>());
export const ByPostFail = createAction(PostTypeActions.BY_FAIL, props<{ error: Error }>());

// Create
export const CreatePost = createAction(PostTypeActions.CREATE, props<{ payload: IPost }>());
export const CreatePostSuccess = createAction(PostTypeActions.CREATE_SUCCESS, props<{ payload: IPost }>());
export const CreatePostFail = createAction(PostTypeActions.CREATE_FAIL, props<{ error: Error }>());

// Update
export const UpdatePost = createAction(PostTypeActions.UPDATE, props<{ payload: number }>());
export const UpdatePostSuccess = createAction(PostTypeActions.UPDATE_SUCCESS, props<{ payload: IPost }>());
export const UpdatePostFail = createAction(PostTypeActions.UPDATE_FAIL, props<{ error: Error }>());

// Delete
export const DeletePost = createAction(PostTypeActions.DELETE, props<{ payload: number }>());
export const DeletePostSuccess = createAction(PostTypeActions.DELETE_SUCCESS, props<{ payload: IPost }>());
export const DeletePostFail = createAction(PostTypeActions.DELETE_FAIL, props<{ error: Error }>());
