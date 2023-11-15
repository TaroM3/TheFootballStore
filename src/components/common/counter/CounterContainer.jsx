import { useContext, useState } from "react";
import Counter from "./Counter";
import { CartContext } from "../../../context/CartContext";
const CounterContainer = ({
  quantity = 1,
  quantityGetter = null,
  id = null,
}) => {
  const [counter, setCounter] = useState(quantity);

  return <Counter counter={counter} setCounter={setCounter} />;
};

export default CounterContainer;
