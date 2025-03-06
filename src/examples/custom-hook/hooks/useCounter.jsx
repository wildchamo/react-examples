import { useState } from "react";

export function useCounter(initailValue = 0) {
  const [count, setCount] = useState(initailValue);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(initailValue);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
