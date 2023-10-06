import { AbstractQueryParams } from "@twitter-lib/ngx-domain";

export type ProfileExpandable = null;
export type ProfileParams =
    'id'
    | 'name'
    | 'tag'
    | 'email'
    | 'active';
export type ProfileOrderParams = 'id' | 'name';
export class ProfileQueryParams extends AbstractQueryParams<
    ProfileExpandable,
    ProfileParams,
    ProfileOrderParams
> {}
