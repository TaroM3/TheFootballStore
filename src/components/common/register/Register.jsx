import { useRef } from 'react';
import styles from './Register.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
// import { UserContext } from "../../../context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
const Register = ({ handleClose }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const resetForm = () => {
    document.querySelector('#registerForm').reset();
  };
  const registerSubmit = async () => {
    event.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        toast.success('Registro exitoso', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const docuRef = doc(db, `users/${res.user.uid}`);
        setDoc(docuRef, {
          name: nameRef.current.value,
          email: emailRef.current.value,
          role: 'user',
          cart: [],
        });
        // res.user.updateProfile({
        //   displayName: nameRef.current.value,
        // });
      })
      .catch(() => {
        toast.error('El email ya esta en uso.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    auth.signOut();
    console.log(auth.currentUser.uid);
    resetForm();
    handleClose();
  };
  return (
    <div className={styles.container}>
      <form id="registerForm">
        <input
          className={styles.input}
          required
          autoComplete="current-email"
          type="text"
          name="name"
          placeholder="Nombre"
          minLength="3"
          ref={nameRef}
        />
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
        <button className={styles.btn} type="submit" onClick={registerSubmit}>
          Registrarse
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
