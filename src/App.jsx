
import { useState } from "react";
import "./App.css";

function App() {
  // count is t
  const [count, setCount] = useState(0);

  // Increase the counter by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrease the counter by 1, but never go below 0
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Set the counter back to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Counter Application</h1>

        <div className="count-display">{count}</div>

        {/* Conditional rendering */}
        {count === 0 ? (
          <p className="message message-min">Minimum limit reached!</p>
        ) : (
          <p className="message message-running">Counter is running!</p>
        )}

        <div className="button-group">
          <button className="btn btn-decrement" onClick={handleDecrement}>
            -
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;