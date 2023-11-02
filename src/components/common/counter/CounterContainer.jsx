import Counter from "./Counter";
import { useState } from "react";
const CounterContainer = ({ quantity = 1 }) => {
  const [counter, setCounter] = useState(quantity);
  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      //   getCounter={}
    />
  );
};

export default CounterContainer;
