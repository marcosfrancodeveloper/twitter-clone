/**
 * Interface base para os query params.
 */
export interface IQueryParams {
  getParams(): IQueryParam[];
}

/**
 * Interface para cada query param.
 */
export interface IQueryParam {
  key: string;
  value: string;
}
