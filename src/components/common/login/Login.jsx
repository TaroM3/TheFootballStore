import { useContext, useRef } from "react";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { UserContext } from "../../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ handleClose }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(UserContext);

  const resetForm = () => {
    document.querySelector("#loginForm").reset();
  };

  const loginSubmit = async () => {
    event.preventDefault();

    await signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        const uidToken = res.user.uid;
        console.log(res);
        login(uidToken);
        handleClose();
      })
      .catch((res) => {
        console.log(res);
        toast.error("El usuario o contraseña no es valida.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    resetForm();
  };
  return (
    <div className={styles.container}>
      <form id="loginForm">
        <input
          className={styles.input}
          required
          autoComplete="current-email"
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          className={styles.input}
          required
          autoComplete="current-password"
          type="password"
          name="password"
          placeholder="Contraseña"
          minLength="6"
          maxLength="16"
          ref={passwordRef}
        />
        <button type="submit" onClick={loginSubmit}>
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
