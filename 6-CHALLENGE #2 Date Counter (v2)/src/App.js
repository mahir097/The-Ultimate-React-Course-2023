import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const date = new Date("june 21 2027");

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  date.setDate(date.getDate() + count * step);

  const up = step * count > 0;
  const down = step * count < 0;
  const today = step * count == 0;
  const days = Math.abs(step * count);

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  function reset() {
    setStep(() => 0);
    setCount(() => 0);
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
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + 1)}>+</button>
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
