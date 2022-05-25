import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByValue,
  incrementAsyncManual,
} from "@/features/counterSlice";
import { useRef } from "react";

const Counter = (): JSX.Element => {
  const incrementValueRef = useRef<HTMLInputElement>(null);
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const clickAddHandler = () => {
    dispatch(incrementByValue(+incrementValueRef.current!.value));
  };

  const clickFetchHandler = () => {
    dispatch(incrementAsync(+incrementValueRef.current!.value));
  };

  const clickManualHandler = () => {
    dispatch(incrementAsyncManual(+incrementValueRef.current!.value));
  };

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      &nbsp;{value}&nbsp;
      <button onClick={() => dispatch(increment())}>+</button>
      <input ref={incrementValueRef} type="number" />
      <button onClick={clickAddHandler}>Add</button>
      <button onClick={clickFetchHandler}>Fetch</button>
      <button onClick={clickManualHandler}>Manual</button>
    </>
  );
};

export default Counter;
