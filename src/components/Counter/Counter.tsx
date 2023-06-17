import { useReducer } from 'react';
import './Counter.css'
import Button from '../Button/Button';
import { State, reducer } from '../../reducers';
import { Action } from '../../actions';
interface CounterProps {
  initialCount: number;
}


const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    finvalValue: initialCount,
    valueToAdd: 0,
  } as State);
  const onIncremenetClick = () => {
    dispatch({
      type: Action.INCREMENT,
    });
  };
  const onDecrementtClick = () => {
    dispatch({
      type: Action.DECREMENT,
    });
  };
  const onResetClick = () => {
    dispatch({
      type: Action.RESET,
    });
  };
  const onChnageInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target!.value;
    dispatch({ type: Action.CHANGEVALUE, payload: value });
  };
  const onAddClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      type: Action.TOTALVALUE,
    });
    dispatch({ type: Action.CHANGEVALUE, payload: 0 });
  };
  return (
    <div className="border rounded p-3 shadow flex flex-col">
      <div className="py-3 font-medium">
        Current Number: {state.finvalValue}
      </div>
      <div className="flex flex-col justify-between sm:justify-start sm:flex-row">
        <Button
          onClick={onIncremenetClick}
          className="mb-3 sm:mb-0 mr-0 sm:mr-3"
          rounded
          success
        >
          Increment
        </Button>
        <Button
          onClick={onDecrementtClick}
          className="mb-3 sm:mb-0 mr-0 sm:mr-3"
          rounded
          danger
        >
          Decrement
        </Button>
        <Button onClick={onResetClick} rounded primary>
          Reset
        </Button>
      </div>
      <form className=" my-3">
        <label className="font-medium mr-3" htmlFor="input-number">
          Enter a number:
        </label>
        <input
          className="number-input p-1 my-4 sm:my-0 mr-3 w-auto bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500"
          type="number"
          name="input-number"
          id="input-number"
          placeholder="Exp:100"
          onChange={onChnageInputValue}
          value={state.valueToAdd || ''}
        />
        <Button onClick={onAddClick} rounded className="hover:bg-gray-100 px-4">
          Add it!
        </Button>
      </form>
    </div>
  );
};

export default Counter;
