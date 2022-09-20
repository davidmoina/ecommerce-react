import React from "react";
import CartWidget from "../CartWidget";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";


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
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
              <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
              <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/category/jewelery">Jewelery</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.carritoContainer}>
          <CartWidget/>
        </div>
      </header>
    </>
  );
};

export default NavBar;
