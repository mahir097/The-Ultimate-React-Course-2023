import "./styles.css";
import React, { useReducer } from "react";

const initialState = { count: 1, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "step":
      return { ...state, step: action.payload };
    case "count":
      return { ...state, count: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Error");
  }
}

export default function App() {
  const date = new Date("june 21 2027");

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  date.setDate(date.getDate() + count * step);

  const up = step * count > 0;
  const down = step * count < 0;
  const today = step * count == 0;
  const days = Math.abs(step * count);

  function handleStep(e) {
    dispatch({ type: "step", payload: Number(e.target.value) });
  }
  function handleCount(e) {
    dispatch({ type: "count", payload: Number(e.target.value) });
  }

  function reset() {
    dispatch({ type: "reset" });
  }
  function inc() {
    dispatch({ type: "inc" });
  }
  function dec() {
    dispatch({ type: "dec" });
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStep}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input type="text" value={count} onChange={handleCount} />
        <button onClick={inc}>+</button>
      </div>
      <div>
        <span>{today ? "Today is " : ""}</span>
        <span>{up ? days + " days from today is " : ""}</span>
        <span>{down ? days + " days ago was" : ""}</span>
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 0 ? (
        <>
          <button onClick={reset}>Reset</button>
        </>
      ) : null}
    </div>
  );
}
