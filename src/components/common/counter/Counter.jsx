import { Button, Typography, Box } from "@mui/material";
import styles from "./Counter.module.css";
const Counter = () => {
  return (
    <Box className={styles.container}>
      <Button className={styles.buttons}>-</Button>
      <Typography>{1}</Typography>
      <Button sx={{ width: 10 }} className={styles.buttons}>
        +
      </Button>
    </Box>
  );
};

export default Counter;
