import Counter from "./Counter";
import { useState } from "react";
const CounterContainer = ({ counter, setCounter }) => {
  return <Counter counter={counter} setCounter={setCounter} />;
};

export default CounterContainer;
