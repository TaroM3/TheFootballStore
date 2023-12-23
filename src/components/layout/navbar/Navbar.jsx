import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';
import UserIcon from '../../common/userIcon/UserIcon';
import CartWidget from '../../common/cartWidget/CartWidget';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      <div className={styles.marquee}>
        <div className={styles.marquee__group}>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
        </div>
        <div className={styles.marquee__group} aria-hidden="true">
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
          <span>LAS MEJORES CAMISETAS DE FUTBOL ⚽ </span>
        </div>
      </div>

      <nav>
        <div className={styles.menu}>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="49"
              viewBox="0 0 55 49"
              fill="none"
            >
              <g>
                <path d="M55 0H0V49H55V0Z" fill="black" />
                <path
                  d="M24.319 8.20068V11.6811C23.4696 12.3964 21.7123 13.7347 19.1167 15.0095V37.0559C17.6944 35.5406 16.5037 34.0153 15.5073 32.5138V16.4974C14.019 17.0008 12.3625 17.4332 10.5454 17.7298C10.4669 15.8257 10.645 14.6843 10.645 14.678C12.3837 14.2057 14.009 13.64 15.5073 13.0282C16.8101 12.4961 18.0169 11.9303 19.1167 11.3608C21.295 10.2344 23.0549 9.09789 24.319 8.20068Z"
                  fill="white"
                />
                <path
                  d="M34.0678 10.6441V14.1869C30.9803 12.5083 29.3562 10.8909 29.3562 10.8909V18.2667C29.4147 18.2978 31.8372 19.7172 33.9594 20.41V23.9166C31.7014 23.3857 30.2641 22.7714 29.3562 22.1807V41.7C28.7434 42.1523 28.1045 42.5997 27.4394 43.0421C26.854 42.6533 26.2911 42.2607 25.748 41.8657V7.51014C26.8503 6.69518 27.4394 6.16309 27.4394 6.16309C27.4394 6.16309 28.1095 6.7687 29.3562 7.67588C30.4808 8.49458 32.0738 9.55877 34.0678 10.6441Z"
                  fill="white"
                />
                <path
                  d="M44.4557 17.7446C42.6797 17.4431 41.0606 17.0107 39.6034 16.511C39.6034 16.511 39.6121 17.5153 39.5311 17.9478C40.9834 18.4387 42.595 18.8612 44.3598 19.1552C43.9376 23.5516 42.1342 30.6071 35.583 37.4246V21.8793C36.6865 22.2593 37.8846 22.5995 39.1737 22.8737C39.0056 23.0656 39.3593 24.5809 39.3506 24.5809C39.5324 24.4326 39.6358 23.6911 39.6931 22.9796C39.7516 22.2643 39.7628 21.5802 39.7641 21.5615C38.2471 21.2575 36.8521 20.8612 35.583 20.4163V11.2573C38.0042 12.5334 40.9647 13.8106 44.3549 14.7315C44.3536 14.7377 44.5292 15.8642 44.4557 17.7446Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_88_928">
                  <rect width="55" height="49" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className={styles.links}>
            <Link onClick={toggleMenu}>Productos</Link>
            <Link to={'/envios'}>Envios</Link>
            <Link to={'/contacto'}>Contacto</Link>
          </div>
          <div style={{ display: 'flex', margin: '0px 10px' }}>
            <CartWidget />
            <UserIcon />
          </div>
        </div>

        <div
          className={styles.item}
          style={{
            marginLeft: 'auto',
            padding: 'auto',
            height: isOpened ? '11rem' : '0rem',
            overflow: 'hidden',
            transition: 'all 1s ease-out',
          }}
          onClick={toggleMenu}
        >
          <ul>
            {' '}
            <Link to="/category/premier-league">Premier League</Link>
            <li>
              <Link to="/category/premier-league/subcategory/tottenham">
                Tottenham
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/category/premier-league/subcategory/manchester-city">
                Manchester City
              </Link>
            </li>
            <li>
              <Link to="/category/premier-league/subcategory/chelsea">
                Chelsea
              </Link>
            </li>
            <li>
              <Link to="/category/premier-league/subcategory/arsenal">
                Arsenal
              </Link>
            </li>
            <li>
              <Link to="/category/premier-league/subcategory/liverpool">
                Liverpool
              </Link>
            </li>
            <li>
              <Link to="/category/premier-league/subcategory/manchester-united">
                Manchester United
              </Link>
            </li>
          </ul>
          <ul>
            <Link to="/category/liga-santander">Liga Santander</Link>

            <li>
              <Link to="/category/liga-santander/subcategory/atletico-madrid">
                Atletico Madrid
              </Link>
            </li>
            <li>
              <Link to="/category/liga-santander/subcategory/real-madrid">
                Real Madrid
              </Link>
            </li>
            <li>
              <Link to="/category/liga-santander/subcategory/barcelona">
                Barcelona
              </Link>
            </li>
          </ul>
          <ul>
            <Link to="/category/league-one">League One</Link>

            <li>
              <Link to="/category/league-one/subcategory/olympique-de-marsella">
                Olympique de Marsella
              </Link>
            </li>
            <li>
              <Link to="/category/league-one/subcategory/lyon">Lyon</Link>
            </li>
            <li>
              <Link to="/category/league-one/subcategory/psg">PSG</Link>
            </li>
          </ul>
          <ul>
            <Link to="/category/serie-a">Serie A</Link>

            <li>
              <Link to="/category/serie-a/subcategory/milan">Milan</Link>
            </li>
            <li>
              <Link to="/category/serie-a/subcategory/inter">Inter</Link>
            </li>
            <li>
              <Link to="/category/serie-a/subcategory/napoli">Napoli</Link>
            </li>
            <li>
              <Link to="/category/serie-a/subcategory/juventus">Juventus</Link>
            </li>
            <li>
              <Link to="/category/serie-a/subcategory/roma">Roma</Link>
            </li>
          </ul>
          <ul>
            <Link to="/category/bundesliga">Bundesliga</Link>

            <li>
              <Link to="/category/bundesliga/subcategory/bayern-munich">
                Bayern Munich
              </Link>
            </li>
            <li>
              <Link to="/category/bundesliga/subcategory/borussia-dortmund">
                Borussia Dortmund
              </Link>
            </li>
          </ul>
          <ul>
            <Link to="/category/selecciones">Selecciones</Link>

            <li>
              <Link to="/category/selecciones/subcategory/america">
                America
              </Link>
            </li>
            <li>
              <Link to="/category/selecciones/subcategory/europa">Europa</Link>
            </li>
          </ul>{' '}
          <ul>
            <Link to="/category/inter-miami">Inter Miami</Link>{' '}
          </ul>
          <ul>
            <Link to="/category/liga-argentina">Liga Argentina</Link>
            <li>
              <Link to="/category/liga-argentina/subcategory/river">River</Link>
            </li>
            <li>
              <Link to="/category/liga-argentina/subcategory/boca">Boca</Link>
            </li>
          </ul>
          <ul>
            <Link to="/category/retros">Retros</Link>

            <li>
              <Link to="/category/retros/subcategory/clubes">Clubes</Link>
            </li>
            <li>
              <Link to="/category/retros/subcategory/selecciones">
                Selecciones
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
