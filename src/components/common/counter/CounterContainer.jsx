import Counter from "./Counter";

const CounterContainer = ({ counter, setCounter, changeQuantity }) => {
  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      changeQuantity={changeQuantity}
    />
  );
};

export default CounterContainer;
