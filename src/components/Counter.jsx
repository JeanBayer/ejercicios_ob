import useCounter from "../hooks/useCounter";
import PropTypes from "prop-types";

const Counter = ({ maxValue = null, minValue = null }) => {
  const { count, increment, decrement, reset } = useCounter(maxValue, minValue);
  return (
    <div>
      <p>{count}</p>
      <div className="contador-opciones">
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
};

export default Counter;
