import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const disptch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state);

  const increase = () => {
    const action = {
      type: 'increase',
      payload: step,
    };
    disptch(action);
  };
  const decrease = () => {
    const action = {
      type: 'decrease',
      payload: step,
    };
    disptch(action);
  };

  const handleChange = (event) => {
    setStep(+event.target.value);
  };

  const toggleCounter = () => {
    const action = {
      type: 'show/hide',
      payload: !showCounter,
    };
    disptch(action);
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      <div className="counter">Counter: {counter}</div>
      {showCounter && (
        <>
          <div>
            <select
              className="btn"
              name="step"
              id="step"
              onChange={handleChange}
            >
              <option defaultValue value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <button className="btn" onClick={increase}>
              increase +
            </button>
            <button className="btn" onClick={decrease}>
              decrease -
            </button>
          </div>
        </>
      )}
      <div>
        <button className="btn" onClick={toggleCounter}>
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default App;
