import { SvgIcon } from "@mui/material";
import styles from "../footer/Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {" "}
      <section
        style={{
          display: "flex",
          marginLeft: "-50px",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="49"
          viewBox="0 0 55 49"
          fill="none"
        >
          <g>
            <path d="M54.8097 0H0V49H54.8097V0Z" fill="black" />
            <path
              d="M24.2349 8.20117V11.6816C23.3884 12.3969 21.6372 13.7352 19.0506 15.01V37.0564C17.6332 35.5411 16.4466 34.0158 15.4537 32.5143V16.4979C13.9705 17.0013 12.3198 17.4337 10.5089 17.7303C10.4307 15.8262 10.6082 14.6847 10.6082 14.6785C12.3409 14.2062 13.9606 13.6405 15.4537 13.0286C16.752 12.4966 17.9546 11.9308 19.0506 11.3613C21.2214 10.2348 22.9751 9.09838 24.2349 8.20117Z"
              fill="white"
            />
            <path
              d="M33.9495 10.6451V14.1878C30.8727 12.5093 29.2542 10.8918 29.2542 10.8918V18.2676C29.3125 18.2988 31.7266 19.7181 33.8415 20.411V23.9176C31.5913 23.3867 30.159 22.7724 29.2542 22.1817V41.701C28.6436 42.1533 28.0068 42.6007 27.3441 43.043C26.7607 42.6542 26.1997 42.2617 25.6586 41.8667V7.51112C26.757 6.69616 27.3441 6.16406 27.3441 6.16406C27.3441 6.16406 28.0118 6.76968 29.2542 7.67685C30.375 8.49556 31.9624 9.55974 33.9495 10.6451Z"
              fill="white"
            />
            <path
              d="M44.302 17.7451C42.5321 17.4436 40.9186 17.0112 39.4664 16.5115C39.4664 16.5115 39.4751 17.5158 39.3944 17.9482C40.8416 18.4392 42.4477 18.8616 44.2064 19.1557C43.7857 23.5521 41.9885 30.6076 35.46 37.4251V21.8798C36.5596 22.2598 37.7536 22.6 39.0382 22.8742C38.8707 23.0661 39.2232 24.5813 39.2145 24.5813C39.3957 24.4331 39.4987 23.6916 39.5558 22.9801C39.6141 22.2648 39.6253 21.5807 39.6265 21.562C38.1148 21.2579 36.7247 20.8617 35.46 20.4168V11.2578C37.8728 12.5338 40.823 13.8111 44.2015 14.732C44.2002 14.7382 44.3752 15.8647 44.302 17.7451Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_189_880">
              <rect width="54.8097" height="49" fill="white" />
            </clipPath>
          </defs>
        </svg>{" "}
        <h3> The Football Store </h3>
      </section>{" "}
      <section className={styles.footerContent}>
        <div className={styles.newsletter}>
          <p>Dejanos tu mail para recibir novedades</p>
          <form
            // onSubmit={handleSubmit}
            className={styles.form}
          >
            <input
              required
              className={styles.input}
              type="email"
              placeholder="Tu email "
              name="email"
              // <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
              // <path d="M14.02 19.9444C13.9107 19.8345 13.8492 19.6856 13.8492 19.5303C13.8492 19.375 13.9107 19.2261 14.02 19.1162L20.0294 13.085L4.31152 13.085C4.15666 13.085 4.00814 13.0233 3.89864 12.9134C3.78913 12.8035 3.72762 12.6545 3.72762 12.4991C3.72762 12.3437 3.78913 12.1946 3.89864 12.0847C4.00814 11.9749 4.15666 11.9131 4.31153 11.9131L20.0294 11.9131L14.02 5.88187C13.9169 5.77079 13.8607 5.62388 13.8634 5.47208C13.866 5.32029 13.9273 5.17546 14.0343 5.0681C14.1413 4.96075 14.2856 4.89925 14.4369 4.89658C14.5882 4.8939 14.7346 4.95024 14.8453 5.05374L21.8522 12.085C21.9615 12.1949 22.0229 12.3438 22.0229 12.4991C22.0229 12.6543 21.9615 12.8033 21.8522 12.9131L14.8453 19.9444C14.7358 20.0541 14.5874 20.1157 14.4326 20.1157C14.2779 20.1157 14.1295 20.0541 14.02 19.9444Z" fill="#979797"/>
              // </svg>
              // onChange={handleChange}
            />
          </form>
        </div>
        <ul className={styles.ul}>
          <li>
            <Link to={"/products"}>Productos</Link>
          </li>
          <li>
            <Link to={"/info"}>Cuidados</Link>
          </li>
          <li>
            <Link to={"/info"}>Guia de talles</Link>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li>
            <Link to={"/envios"}>Metodos de entrega</Link>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li>
            <Link to={"/contacto"}>Contacto</Link>
          </li>
          <li>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              to={""}
            >
              <SvgIcon component={InstagramIcon} /> @thefootballstore.ar
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
