import { useState } from "react";

const useCounter = (maxValue = null, minValue = null) => {
  const [count, setCount] = useState(minValue || 0);
  const increment = () => {
    if (maxValue && count >= maxValue) return;
    setCount(count + 1);
  };
  const decrement = () => {
    if (minValue && count <= minValue) return;
    setCount(count - 1);
  };
  const reset = () => {
    setCount(minValue || 0);
  };
  return { count, increment, decrement, reset };
};

export default useCounter;
