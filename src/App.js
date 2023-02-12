import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, logIn, logOut } from './store';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const disptch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const counterHandler = (fn) => {
    disptch(fn(step));
  };

  const handleIncrease = () => {
    counterHandler(increase);
  };
  const handleDecrease = () => {
    counterHandler(decrease);
  };

  const handleChange = (event) => {
    setStep(+event.target.value);
  };

  const toggloLog = () => {
    if (isLoggedIn) {
      disptch(logOut());
    } else {
      disptch(logIn());
    }
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {isLoggedIn && (
        <>
          <div className="counter">Counter: {counter}</div>

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
            <button className="btn" onClick={handleIncrease}>
              increase +
            </button>
            <button className="btn" onClick={handleDecrease}>
              decrease -
            </button>
          </div>
        </>
      )}
      <button className="btn" onClick={toggloLog}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
