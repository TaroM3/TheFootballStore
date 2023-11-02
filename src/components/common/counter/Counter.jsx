import { Typography, Box } from "@mui/material";
import styles from "./Counter.module.css";
const Counter = ({ counter, setCounter }) => {
  return (
    <Box className={styles.container}>
      <button
        onClick={() => setCounter(counter - 1)}
        className={styles.buttons}
      >
        -
      </button>
      <Typography>{counter}</Typography>
      <button
        onClick={() => setCounter(counter + 1)}
        className={styles.buttons}
      >
        +
      </button>
    </Box>
  );
};

export default Counter;
