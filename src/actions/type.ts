import { IncrementType,DecrementType, ResetType, TotalValueType, ChangeValueType } from "./counter";

export enum Action {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  CHANGEVALUE = 'CHANGEVALUE',
  TOTALVALUE = 'TOTALVALUE',
}

export type ActionTypes =
  | IncrementType
  | DecrementType
  | ResetType
  | TotalValueType
  | ChangeValueType;

