import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ quantity = 1, quantityGetter = null }) => {
  const [counter, setCounter] = useState(quantity);

  return <Counter counter={counter} setCounter={setCounter} />;
};

export default CounterContainer;
