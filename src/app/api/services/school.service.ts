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

import { CreateSchoolDto } from '../models/create-school-dto';
import { SchoolDto } from '../models/school-dto';
import { SchoolTypeDto } from '../models/school-type-dto';

@Injectable({
  providedIn: 'root',
})
export class SchoolService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSchoolGet
   */
  static readonly ApiSchoolGetPath = '/api/School';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGet$Plain$Response(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<SchoolDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolGetPath, 'get');
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
        return r as StrictHttpResponse<Array<SchoolDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGet$Plain(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<SchoolDto>> {

    return this.apiSchoolGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolDto>>) => r.body as Array<SchoolDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGet$Json$Response(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<SchoolDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolGetPath, 'get');
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
        return r as StrictHttpResponse<Array<SchoolDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolGet$Json(params?: {
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<SchoolDto>> {

    return this.apiSchoolGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolDto>>) => r.body as Array<SchoolDto>)
    );
  }

  /**
   * Path part for operation apiSchoolPost
   */
  static readonly ApiSchoolPostPath = '/api/School';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolPost$Plain$Response(params?: {
    body?: CreateSchoolDto
  }): Observable<StrictHttpResponse<SchoolDto>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SchoolDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolPost$Plain(params?: {
    body?: CreateSchoolDto
  }): Observable<SchoolDto> {

    return this.apiSchoolPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolDto>) => r.body as SchoolDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolPost$Json$Response(params?: {
    body?: CreateSchoolDto
  }): Observable<StrictHttpResponse<SchoolDto>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SchoolDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSchoolPost$Json(params?: {
    body?: CreateSchoolDto
  }): Observable<SchoolDto> {

    return this.apiSchoolPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolDto>) => r.body as SchoolDto)
    );
  }

  /**
   * Path part for operation apiSchoolSchoolTypesGet
   */
  static readonly ApiSchoolSchoolTypesGetPath = '/api/School/SchoolTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolSchoolTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolSchoolTypesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<SchoolTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolSchoolTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SchoolTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolSchoolTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolSchoolTypesGet$Plain(params?: {
  }): Observable<Array<SchoolTypeDto>> {

    return this.apiSchoolSchoolTypesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolTypeDto>>) => r.body as Array<SchoolTypeDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSchoolSchoolTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolSchoolTypesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<SchoolTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.ApiSchoolSchoolTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SchoolTypeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSchoolSchoolTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSchoolSchoolTypesGet$Json(params?: {
  }): Observable<Array<SchoolTypeDto>> {

    return this.apiSchoolSchoolTypesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SchoolTypeDto>>) => r.body as Array<SchoolTypeDto>)
    );
  }

}
