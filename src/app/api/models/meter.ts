/* tslint:disable */
/* eslint-disable */
import { MeterReading } from './meter-reading';
import { MeterType } from './meter-type';
export interface Meter {
  meterDescription?: null | string;
  meterId?: number;
  meterName?: null | string;
  meterReadings?: null | Array<MeterReading>;
  meterType?: MeterType;
  meterTypeId?: null | number;
  schoolId?: null | number;
  utilityAccountNumber?: null | string;
}
