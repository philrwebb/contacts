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

import { CreateMeterDto } from '../models/create-meter-dto';
import { MeterDto } from '../models/meter-dto';

@Injectable({
  providedIn: 'root',
})
export class MetersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMetersGet
   */
  static readonly ApiMetersGetPath = '/api/Meters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMetersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMetersGet$Plain$Response(params?: {
    schoolid?: number;
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<MeterDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MetersService.ApiMetersGetPath, 'get');
    if (params) {
      rb.query('schoolid', params.schoolid, {});
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
        return r as StrictHttpResponse<Array<MeterDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMetersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMetersGet$Plain(params?: {
    schoolid?: number;
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<MeterDto>> {

    return this.apiMetersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MeterDto>>) => r.body as Array<MeterDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMetersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMetersGet$Json$Response(params?: {
    schoolid?: number;
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<MeterDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MetersService.ApiMetersGetPath, 'get');
    if (params) {
      rb.query('schoolid', params.schoolid, {});
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
        return r as StrictHttpResponse<Array<MeterDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMetersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMetersGet$Json(params?: {
    schoolid?: number;
    name?: string;
    searchQuery?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<MeterDto>> {

    return this.apiMetersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MeterDto>>) => r.body as Array<MeterDto>)
    );
  }

  /**
   * Path part for operation apiMetersPost
   */
  static readonly ApiMetersPostPath = '/api/Meters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMetersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetersPost$Plain$Response(params?: {
    body?: CreateMeterDto
  }): Observable<StrictHttpResponse<MeterDto>> {

    const rb = new RequestBuilder(this.rootUrl, MetersService.ApiMetersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MeterDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMetersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetersPost$Plain(params?: {
    body?: CreateMeterDto
  }): Observable<MeterDto> {

    return this.apiMetersPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MeterDto>) => r.body as MeterDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMetersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetersPost$Json$Response(params?: {
    body?: CreateMeterDto
  }): Observable<StrictHttpResponse<MeterDto>> {

    const rb = new RequestBuilder(this.rootUrl, MetersService.ApiMetersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MeterDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMetersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetersPost$Json(params?: {
    body?: CreateMeterDto
  }): Observable<MeterDto> {

    return this.apiMetersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MeterDto>) => r.body as MeterDto)
    );
  }

}
