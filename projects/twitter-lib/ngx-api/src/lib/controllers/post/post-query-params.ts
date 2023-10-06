import { AbstractQueryParams } from "@twitter-lib/ngx-domain";

export type PostExpandable =
    | 'profile';
export type PostParams =
    'id'
    | 'title'
    | 'profileId'
    | 'date';
export type PostOrderParams = 'id' | 'date';
export class PostQueryParams extends AbstractQueryParams<
    PostExpandable,
    PostParams,
    PostOrderParams
> {}
