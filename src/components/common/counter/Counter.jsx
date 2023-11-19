import { Typography, Box } from "@mui/material";
import styles from "./Counter.module.css";
const Counter = ({ counter, setCounter, changeQuantity }) => {
  const updateQuantity = (counter, addition = true) => {
    if (typeof changeQuantity === "function") {
      if (addition === true) {
        setCounter(counter + 1);
        changeQuantity(counter + 1);
      } else {
        setCounter(counter - 1);
        changeQuantity(counter - 1);
      }
    } else {
      if (addition === true) {
        setCounter(counter + 1);
      } else {
        setCounter(counter - 1);
      }
    }
  };
  return (
    <Box className={styles.container}>
      <button
        disabled={counter <= 1 ? true : false}
        // onClick={() => setCounter(counter - 1)}
        onClick={() => updateQuantity(counter, false)}
        className={styles.buttons}
      >
        -
      </button>
      <Typography>{counter}</Typography>
      <button
        // onClick={() => setCounter(counter + 1)}
        onClick={() => updateQuantity(counter, true)}
        className={styles.buttons}
      >
        +
      </button>
    </Box>
  );
};

export default Counter;
