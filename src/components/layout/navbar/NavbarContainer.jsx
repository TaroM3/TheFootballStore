import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";
import CartWidget from "../../common/cartWidget/CartWidget";
import UserIcon from "../../common/userIcon/UserIcon";

const NavbarContainer = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        {" "}
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolore
          quia blanditiis consectetur autem ad velit deleniti non. Autem alias
          recusandae necessitatibus. Sapiente officia nam commodi minus,
          eligendi doloribus sed.
        </h5>
        <Container className={styles.navbar}>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}{" "}
          <Navbar.Brand>
            <Link to="/">
              <img
                className={styles.img}
                src="https://res.cloudinary.com/daq80uhh9/image/upload/v1697851620/thefootballstore/logoprovisorio_lvmskq.png"
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Nav
              className="me-auto"
              style={{
                display: "flex",
                minWidth: "50%",
                alignItems: "start",
                justifyContent: "space-around",
              }}
            >
              <NavDropdown
                title="Productos"
                id="basic-nav-dropdown"
                className={styles.dropdown}
              >
                <NavDropdown.Item className={styles.item}>
                  <ul>
                    {" "}
                    <Link to="/category/premier-league">Premier League</Link>
                    <li>
                      <Link to="/category/premier-league/subcategory/tottenham">
                        Tottenham
                      </Link>
                    </li>
                    <li>
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
                      <Link to="/category/league-one/subcategory/lyon">
                        Lyon
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/league-one/subcategory/psg">PSG</Link>
                    </li>
                  </ul>
                  <ul>
                    <Link to="/category/serie-a">Serie A</Link>

                    <li>
                      <Link to="/category/serie-a/subcategory/milan">
                        Milan
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/serie-a/subcategory/inter">
                        Inter
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/serie-a/subcategory/napoli">
                        Napoli
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/serie-a/subcategory/juventus">
                        Juventus
                      </Link>
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
                      <Link to="/category/selecciones/subcategory/europa">
                        Europa
                      </Link>
                    </li>
                  </ul>
                  <Link to="/category/inter-miami">Inter Miami</Link>{" "}
                  <ul>
                    <li>
                      <Link to="/category/liga-argentina">Liga Argentina</Link>
                    </li>
                    <li>
                      <Link to="/category/liga-argentina/subcategory/river">
                        River
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/liga-argentina/subcategory/boca">
                        Boca
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <Link to="/category/retros">Retros</Link>

                    <li>
                      <Link to="/category/retros/subcategory/clubes">
                        Clubes
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/retros/subcategory/selecciones">
                        Selecciones
                      </Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to={"/info"}>Ayuda</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/contacto"}>Contacto</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/dashboard"}>Dashboard</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>{" "}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
          </Form>{" "}
          <CartWidget />
          <UserIcon />
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
};

export default NavbarContainer;
