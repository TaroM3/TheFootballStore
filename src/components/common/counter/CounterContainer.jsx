import { useState } from "react";
import Counter from "./Counter";
<<<<<<< HEAD

const CounterContainer = ({ quantity = 1, quantityGetter = null }) => {
=======
import { CartContext } from "../../../context/CartContext";
const CounterContainer = ({
  quantity = 1,
  quantityGetter = null,
  id = null,
}) => {
>>>>>>> beb64d4e2dfe78d1736927d46af4045fd57e3804
  const [counter, setCounter] = useState(quantity);

  return <Counter counter={counter} setCounter={setCounter} />;
};

export default CounterContainer;
