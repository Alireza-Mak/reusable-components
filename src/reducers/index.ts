import { Action, ActionTypes } from '../actions';
export interface State {
  finvalValue: number;
  valueToAdd: number;
}
export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
    case Action.INCREMENT:
      return { ...state, finvalValue: state.finvalValue + 1 };
    case Action.DECREMENT:
      return { ...state, finvalValue: state.finvalValue - 1 };
    case Action.RESET:
      return { ...state, finvalValue: 0, valueToAdd: 0 };
    case Action.CHANGEVALUE:
      return { ...state, valueToAdd: action.payload };
    case Action.TOTALVALUE:
      return { ...state, finvalValue: state.finvalValue + state.valueToAdd };
    default:
      return state;
  }
};
