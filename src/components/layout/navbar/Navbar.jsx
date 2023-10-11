import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>Home </Link>
      <ul>
        <Link to={"/products"}>Productos</Link>
        <li>
          <Link to="/category/...">Cat1</Link>
        </li>
        <li>
          <Link to="/category/...">Cat2</Link>
        </li>
      </ul>
      <Link to={"/info"}>Ayuda - Entregas</Link>
      <Link to={"/contacto"}>Contacto</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Navbar;
