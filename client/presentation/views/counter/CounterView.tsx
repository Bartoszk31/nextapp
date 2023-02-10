import React from "react";

import { useAppSelector, useAppDispatch } from "@/client/application/hooks";
import { increment } from "@/client/application/reducers/counterSlice";

const CounterView = () => {
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>count: {counterValue}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default CounterView;
