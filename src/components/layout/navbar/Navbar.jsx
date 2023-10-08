import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div>
    <Link to={'/'} >Home </Link>
    <Link to={'/products'}>Productos</Link>
    <Link to={'/dashboard'}>Dashboard</Link>
  </div>
);
};

export default Navbar;
