import { useContext, useState } from "react";
import Counter from "./Counter";
import { CartContext } from "../../../context/CartContext";
const CounterContainer = ({
  quantity = 1,
  quantityGetter = null,
  id = null,
}) => {
  const { updateQuantityById } = useContext(CartContext);

  const [counter, setCounter] = useState(quantity);

  if (quantityGetter !== null) {
    quantityGetter(counter);
  }
  // if (id !== null) {
  //   updateQuantityById(id, counter);
  //   // console.log("HOla");
  // }

  return <Counter counter={counter} setCounter={setCounter} />;
};

export default CounterContainer;
