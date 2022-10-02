import React from 'react';
import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import { Shop } from '../../context/CartContext';
import styles from './styles.module.scss';

const CartWidget = () => {

  const {totalProducts} = useContext(Shop);

  return (
    <div className={styles.widgetContainer}>
      <FaShoppingCart/>
      {totalProducts() !== 0 && 
        <div className={styles.productsInCart}>
          {totalProducts()}
        </div>}
    </div>
  )
}

export default CartWidget;