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

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div>
        <span>{today ? "Today is " : ""}</span>
        <span>{up ? days + " days from today is " : ""}</span>
        <span>{down ? days + " days ago was " : ""}</span>

        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
