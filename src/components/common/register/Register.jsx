import styles from "./Register.module.css";
const Register = () => {
  const registerSubmit = () => {};
  return (
    <div className={styles.container}>
      <form onClick={registerSubmit}>
        <input
          className={styles.input}
          required
          autoComplete="current-email"
          type="text"
          name="name"
          placeholder="Nombre"
        />
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
