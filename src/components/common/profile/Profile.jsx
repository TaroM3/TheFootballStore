import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import styles from "./Profile.module.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
const Profile = ({ handleClose }) => {
  const { userDataTransfer, logout } = useContext(UserContext);
  const user = userDataTransfer();

  const handleCloseButton = () => {
    logout();
    handleClose();
  };
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>
          <h1>{user.name}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="1 1 23 23"
            fill="none"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="#6DF0F7"
            />
            <path
              d="M22 22C22 18.13 17.7421 15 12.5 15C7.25786 15 3 18.13 3 22"
              stroke="#6DF0F7"
            />
            <path d="M3 22H22" stroke="#6DF0F7" />
          </svg>
        </div>
        <Divider color="white" style={{ margin: "20px 0px " }} />
      </header>
      <div className={styles.userData}>
        <h3>Email</h3>
        <p>{user.email}</p>
      </div>
      {user.role === "admin" ? (
        <Link to="/dashboard">Dashboard</Link>
      ) : (
        <Link to="/products" className={styles.link}>
          Productos
        </Link>
      )}

      <Divider color="white" style={{ margin: "20px 0px " }} />
      {/* <h2>{user.role}</h2> */}
      <footer>
        <button className={styles.btn} onClick={handleCloseButton}>
          Cerrar Sesion
        </button>
      </footer>
    </div>
  );
};

export default Profile;
