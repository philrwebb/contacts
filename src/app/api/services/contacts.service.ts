/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ContactCreateDto } from '../models/contact-create-dto';
import { ContactDto } from '../models/contact-dto';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiContactsXPaginationHead
   */
  static readonly ApiContactsXPaginationHeadPath = '/api/Contacts/X-Pagination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsXPaginationHead$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsXPaginationHead$Plain$Response(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<ContactDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsXPaginationHeadPath, 'head');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('searchQuery', params.searchQuery, {});
      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsXPaginationHead$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsXPaginationHead$Plain(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<ContactDto>> {

    return this.apiContactsXPaginationHead$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>) => r.body as Array<ContactDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsXPaginationHead$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsXPaginationHead$Json$Response(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<ContactDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsXPaginationHeadPath, 'head');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('searchQuery', params.searchQuery, {});
      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsXPaginationHead$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsXPaginationHead$Json(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<ContactDto>> {

    return this.apiContactsXPaginationHead$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>) => r.body as Array<ContactDto>)
    );
  }

  /**
   * Path part for operation apiContactsGet
   */
  static readonly ApiContactsGetPath = '/api/Contacts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsGet$Plain$Response(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<ContactDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('searchQuery', params.searchQuery, {});
      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsGet$Plain(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<ContactDto>> {

    return this.apiContactsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>) => r.body as Array<ContactDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsGet$Json$Response(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<ContactDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('searchQuery', params.searchQuery, {});
      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsGet$Json(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<ContactDto>> {

    return this.apiContactsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>) => r.body as Array<ContactDto>)
    );
  }

  /**
   * Path part for operation apiContactsPost
   */
  static readonly ApiContactsPostPath = '/api/Contacts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContactsPost$Plain$Response(params?: {
    body?: ContactCreateDto
  }): Observable<StrictHttpResponse<ContactDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContactDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContactsPost$Plain(params?: {
    body?: ContactCreateDto
  }): Observable<ContactDto> {

    return this.apiContactsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ContactDto>) => r.body as ContactDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContactsPost$Json$Response(params?: {
    body?: ContactCreateDto
  }): Observable<StrictHttpResponse<ContactDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContactDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContactsPost$Json(params?: {
    body?: ContactCreateDto
  }): Observable<ContactDto> {

    return this.apiContactsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ContactDto>) => r.body as ContactDto)
    );
  }

  /**
   * Path part for operation apiContactsIdGet
   */
  static readonly ApiContactsIdGetPath = '/api/Contacts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ContactDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContactDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsIdGet$Plain(params: {
    id: number;
  }): Observable<ContactDto> {

    return this.apiContactsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ContactDto>) => r.body as ContactDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ContactDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContactDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsIdGet$Json(params: {
    id: number;
  }): Observable<ContactDto> {

    return this.apiContactsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ContactDto>) => r.body as ContactDto)
    );
  }

  /**
   * Path part for operation apiContactsIdDelete
   */
  static readonly ApiContactsIdDeletePath = '/api/Contacts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactsIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiContactsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiContactsContactIdPatch
   */
  static readonly ApiContactsContactIdPatchPath = '/api/Contacts/{contactId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactsContactIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContactsContactIdPatch$Response(params: {
    contactId: number;
    body?: Array<Operation>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactsService.ApiContactsContactIdPatchPath, 'patch');
    if (params) {
      rb.path('contactId', params.contactId, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiContactsContactIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContactsContactIdPatch(params: {
    contactId: number;
    body?: Array<Operation>
  }): Observable<void> {

    return this.apiContactsContactIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
