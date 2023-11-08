import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form>
        <input
          className={styles.input}
          required
          autoComplete="current-email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.input}
          required
          autoComplete="current-password"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
