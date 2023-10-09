/* tslint:disable */
/* eslint-disable */
import { Meter } from './meter';
export interface MeterReading {
  active?: boolean;
  createdAt?: string;
  createdBy?: null | string;
  id?: number;
  lastModifiedAt?: string;
  lastModifiedBy?: null | string;
  meter?: Meter;
  meterId?: number;
  readingDatetime?: string;
  readingValue?: number;
}
