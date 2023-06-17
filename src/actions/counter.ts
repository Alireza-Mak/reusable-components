import { Action } from './type';

export interface IncrementType {
  type: Action.INCREMENT;
}
export interface DecrementType {
  type: Action.DECREMENT;
}
export interface ResetType {
  type: Action.RESET;
}
export interface TotalValueType {
  type: Action.TOTALVALUE;
}
export interface ChangeValueType {
  type: Action.CHANGEVALUE;
  payload: number;
}

export function increment(): IncrementType {
  return { type: Action.INCREMENT };
}
export function decrement(): DecrementType {
  return { type: Action.DECREMENT };
}
export function reset(): ResetType {
  return { type: Action.RESET };
}
export function changeValue(value: number): ChangeValueType {
  return { type: Action.CHANGEVALUE, payload: value };
}
export function addValue(): TotalValueType {
  return { type: Action.TOTALVALUE };
}
