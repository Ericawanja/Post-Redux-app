import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  add_by
} from "./Redux/features/Counter/CounterSlice";

function Counter() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  let [amount, set_amount] = useState('');

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type="text"
        value={amount}
        placeholder="Enter amount to add"
        onChange={(e) => set_amount(e.target.value)}
      />
      <button onClick={() => dispatch(add_by(amount))}>Add</button>
    </div>
  );
}

export default Counter;
