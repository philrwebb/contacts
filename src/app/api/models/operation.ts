/* tslint:disable */
/* eslint-disable */
import { OperationType } from './operation-type';
export interface Operation {
  from?: null | string;
  op?: null | string;
  operationType?: OperationType;
  path?: null | string;
  value?: null | any;
}
