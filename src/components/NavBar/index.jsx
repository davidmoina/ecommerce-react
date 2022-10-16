import React from "react";
import CartWidget from "../CartWidget";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";


const NavBar = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/"><h3>Logo</h3></Link>
        </div>
        <nav className={styles.navbarContainer}>
          <ul>
            <li>
              <Link to="/" className={styles.link}>INICIO</Link>
            </li>
            <li>
              <DropdownMenu/>
            </li>
          </ul>
        </nav>
        <div className={styles.carritoContainer}>
          <Link to="/cart"><CartWidget/></Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
