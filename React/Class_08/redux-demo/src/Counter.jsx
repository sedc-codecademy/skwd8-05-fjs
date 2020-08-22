import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

const Counter = () => {
  const count = useSelector(store => store.count);
  const [changeBy, setChangeBy] = useState(0);
  const dispatch = useDispatch();

  const changeValue = e => {
    setChangeBy(e.target.value);
  };
  return (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <div>
        <input type="number" value={changeBy} onChange={changeValue} />
        <button onClick={() => dispatch(increment(changeBy))}>
          {" "}
          ADD VALUE
        </button>
        <button onClick={() => dispatch(decrement(changeBy))}>
          {" "}
          SUBSTRUCT VALUE
        </button>
      </div>
    </div>
  );
};

export default Counter;
