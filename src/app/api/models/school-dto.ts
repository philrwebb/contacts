/* tslint:disable */
/* eslint-disable */
import { Meter } from './meter';
import { SchoolType } from './school-type';
export interface SchoolDto {
  meters?: null | Array<Meter>;
  schoolId?: number;
  schoolLocation?: null | string;
  schoolName?: null | string;
  schoolType?: SchoolType;
  schoolTypeId?: number;
}
