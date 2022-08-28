import React from "react";
import CartWidget from "../CartWidget";
import styles from "./style.module.scss";


const NavBar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h3>Logo</h3>
        </div>
        <nav className={styles.navbarContainer}>
          <ul>
            <li>
              <a href="/#">Inicio</a>
            </li>
            <li>
              <a href="/#">Productos</a>
            </li>
            <li>
              <a href="/#">Contacto</a>
            </li>
            <li>
              <a href="/#">Faqs</a>
            </li>
          </ul>
        </nav>
        <div className={styles.carritoContainer}>
          <a href="/#">
            <CartWidget/>
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;
