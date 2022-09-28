import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shop } from '../../context/CartContext';
import styles from './styles.module.scss';

const ButtonsCartItems = () => {

  const {clearCart} = useContext(Shop); 

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => clearCart()}>Vaciar carrito</button>
      <Link to="/"><button>Seguir comprando</button></Link>
      
    </div>
  )
}

export default ButtonsCartItems
