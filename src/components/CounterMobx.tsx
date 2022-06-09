import React, { useRef } from "react";
import { observer } from "mobx-react-lite";

// option 1 - pass by props
// option 2 - other way to provide store would be to use React.Context and wrap abound component
// option 3 - use directly
import counterStore from "@/store/counter";

const CounterMobx = () => {
  const incrementValueRef = useRef<HTMLInputElement>(null);

  const clickAddHandler = () => {
    counterStore.incrementByValue(+incrementValueRef.current!.value);
  };

  const clickFetchHandler = async () => {
    await counterStore.incrementAsync(+incrementValueRef.current!.value);
  };

  const clickFetchGenHandler = () => {
    counterStore.incrementAsyncGen(+incrementValueRef.current!.value);
  };

  return (
    <>
      <button onClick={() => counterStore.decrement()}>-</button>
      &nbsp;{counterStore.value}&nbsp;* 2 = {counterStore.double}
      <button onClick={() => counterStore.increment()}>+</button>
      <input ref={incrementValueRef} type="number" />
      <button onClick={clickAddHandler}>Add</button>
      <button onClick={clickFetchHandler}>Fetch</button>
      <button onClick={clickFetchGenHandler}>FetchGen</button>
    </>
  );
};

export default observer(CounterMobx);
