import "./styles.css";
import {useState} from 'react';

function Counter(props) {
    const [count,setCount] = useState(0);
    const incrementCount = () => {
        setCount(count+1);
    }
    const decrementCount = () => {
        setCount(count-1);
    }
    const resetCount = () => {
        setCount(0);
    }
  return (
    <div>
      <div className="counter">
        <div className="display">
            <h1>{count}</h1>
        </div>
        <div className="btns">
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
