import { useRef } from 'react';
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
// import { UserContext } from '../../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
// import { collection, doc, getDoc } from 'firebase/firestore';
import { useUser } from '../../../hooks/useUser';

const Login = ({ toggleDrawer }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  // const { login } = useContext(UserContext);
  const { login } = useUser();

  const resetForm = () => {
    document.querySelector('#loginForm').reset();
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
        // const token = res.user.getIdToken();
        login({ uidToken: uidToken, token: res.user.getIdToken() });
        console.log(uidToken);
      })
      .catch((res) => {
        console.log(res);
        toast.error('El usuario o contraseña no es valida.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    toggleDrawer('right', false);

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
        <button className={styles.btn} type="submit" onClick={loginSubmit}>
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
