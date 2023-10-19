import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>Home </Link>
      <ul>
        <Link to="/products">Productos</Link>
        <li>
          <Link to="/category/premierleague">Premier League</Link>
          <ul>
            <li>
              <Link to="/category/premierleague/club/tottenham">Tottenham</Link>
            </li>
            <li>
              <Link to="/category/premierleague/club/manchester-city">
                Manchester City
              </Link>
            </li>
            <li>
              <Link to="/category/premierleague/club/chelsea">Chelsea</Link>
            </li>
            <li>
              <Link to="/category/premierleague/club/arsenal">Arsenal</Link>
            </li>
            <li>
              <Link to="/category/premierleague/club/liverpool">Liverpool</Link>
            </li>
            <li>
              <Link to="/category/premierleague/club/manchester-united">
                Manchester United
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/ligasantander">Liga Santander</Link>
          <ul>
            <li>
              <Link to="/category/ligasantander/club/atletico-madrid">
                Atletico Madrid
              </Link>
            </li>
            <li>
              <Link to="/category/ligasantander/club/real-madrid">
                Real Madrid
              </Link>
            </li>
            <li>
              <Link to="/category/ligasantander/club/barcelona">Barcelona</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/league-one">League One</Link>
          <ul>
            <li>
              <Link to="/category/league-one/club/">Olympique de Marsella</Link>
            </li>
            <li>
              <Link to="/category/league-one/club">Lyon</Link>
            </li>
            <li>
              <Link to="/category/league-one/club">PSG</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/serie-a">Serie A</Link>
          <ul>
            <li>
              <Link to="/category/serie-a/club/milan">Milan</Link>
            </li>
            <li>
              <Link to="/category/serie-a/club/inter">Inter</Link>
            </li>
            <li>
              <Link to="/category/serie-a/club/napoli">Napoli</Link>
            </li>
            <li>
              <Link to="/category/serie-a/club/juventus">Juventus</Link>
            </li>
            <li>
              <Link to="/category/serie-a/club/roma">Roma</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/bundesliga">Bundesliga</Link>
          <ul>
            <li>
              <Link to="/category/bundesliga/club/bayern-munich">
                Bayern Munich
              </Link>
            </li>
            <li>
              <Link to="/category/bundesliga/club/borussia">Borussia</Link>
            </li>
            <li>
              <Link to="/category/bundesliga/club/dortmund">Dortmund</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/selecciones">Selecciones</Link>
          <ul>
            <li>
              <Link to="/category/selecciones/america">America</Link>
            </li>
            <li>
              <Link to="/category/selecciones/europa">Europa</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/inter-miami">Inter Miami</Link>
        </li>
        <li>
          <Link to="/category/liga-argentina">Liga Argentina</Link>
          <ul>
            <li>
              <Link to="/category/liga-argentina/club/river">River</Link>
            </li>
            <li>
              <Link to="/category/liga-argentina/club/boca">Boca</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/retros">Retros</Link>
          <ul>
            <li>
              <Link to="/category/retros/clubes">Clubes</Link>
            </li>
            <li>
              <Link to="/category/retros/selecciones">Selecciones</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Link to={"/info"}>Ayuda - Entregas</Link>
      <Link to={"/contacto"}>Contacto</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Navbar;
