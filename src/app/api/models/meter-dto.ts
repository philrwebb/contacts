/* tslint:disable */
/* eslint-disable */
import { MeterReading } from './meter-reading';
import { MeterType } from './meter-type';
export interface MeterDto {
  meterDescription?: null | string;
  meterId?: number;
  meterName?: null | string;
  meterReading?: null | Array<MeterReading>;
  meterType?: MeterType;
  schoolId?: null | number;
  utilityAccountNumber?: null | string;
}
