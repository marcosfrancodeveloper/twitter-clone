import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity, PathParams } from '.';
import { IQueryParams } from '../interfaces';

/**
 * Classe abstrata utilizada para mapear as interações para a api.
 * @template U objeto abstrato de retorno
 */
export abstract class AbstractAPI<U> {
  /**
   * URL a ser chamada
   * @protected
   * @abstract
   * @type {string}
   * @memberof AbstractAPI
   */
  protected abstract url: string;

  /**
   * Service http
   * @protected
   * @type {HttpClient}
   * @memberof AbstractAPI
   */
  protected http: HttpClient;

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  /**
   * Método responsável por buscar entidade da api com objeto genérico
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected getGeneric<U>(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): Observable<U> {
    const requestUrl = this.getRequestUrl(pathParams, queryParams, customUrl);
    return this.http.get<U>(requestUrl);
  }

  /**
   * Método responsável por buscar uma lista de entidades da api com objeto genérico
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected getListGeneric<U>(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): Observable<Array<U>> {
    const requestUrl = this.getRequestUrl(pathParams, queryParams, customUrl);
    return this.http.get<Array<U>>(requestUrl);
  }

  /**
   * Envia um post para api com objeto genérico
   * @param entity (optional) Entidade a ser enviada para a api.
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected postGeneric<U>(
    entity: Entity,
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): Observable<U> {
    const requestUrl = this.getRequestUrl(pathParams, queryParams, customUrl);
    return this.http.post<U>(requestUrl, entity);
  }

  /**
   * Envia um put para api com objeto genérico
   * @param entity (optional) Entidade a ser enviada para a api.
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected putGeneric<U>(
    entity: Entity,
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): Observable<U> {
    const requestUrl = this.getRequestUrl(pathParams, queryParams, customUrl);
    return this.http.put<U>(requestUrl, entity);
  }

  /**
   * Envia um patch para api com objeto genérico
   * @param entity (optional) Entidade a ser enviada para a api.
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected patchGeneric<U>(
    entity: Entity,
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): Observable<U> {
    const requestUrl = this.getRequestUrl(pathParams, queryParams, customUrl);
    return this.http.patch<U>(requestUrl, entity);
  }

  /**
   * Envia um delete para api
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @returns
   */
  protected deleteGeneric(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): Observable<void> {
    const requestUrl = this.getRequestUrl(pathParams, queryParams, customUrl);
    return this.http.delete<void>(requestUrl);
  }

  /**
   * Obtém a url que será utilizada para fazer a requisição a api.
   * A url é gerada através da combinação das propriedades recebidas no método
   * @param pathParams (optional) Path params da request.
   * @param queryParams (optional) Query params da request.
   * @param customUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   */
  protected getRequestUrl(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customUrl?: string
  ): string {
    const stringQueryParams = this.createQueryParams(queryParams);

    let requestUrl = customUrl ? customUrl : this.url;
    if (pathParams) {
      requestUrl += `/${pathParams}`;
    }

    return `${requestUrl}${stringQueryParams}`;
  }

  /**
   * Cria a string com os query params que será utilizada nas requisiçoes a api.
   * @param queryParamsOptions (optional) Query params da request.
   */
  protected createQueryParams(queryParamsOptions?: IQueryParams): string {
    const queryParams = [];

    if (!queryParamsOptions || queryParamsOptions.getParams().length === 0) {
      return '';
    }

    queryParams.push(
      queryParamsOptions
        .getParams()
        .map((item) => `${item.key}=${encodeURI(item.value)}`)
        .join('&')
    );

    return `?${queryParams.join('&')}`;
  }
}
