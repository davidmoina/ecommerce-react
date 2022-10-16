import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/CartContext';
import styles from './styles.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

  const {totalProducts} = useContext(Shop);

  const total =  totalProducts();

  return (
    <div className={styles.widgetContainer}>
      <ShoppingCartIcon fontSize='inherit'/>
      {total !== 0 && 
        <div className={styles.productsInCart}>
          {total}
        </div>}
    </div>
  )
}

export default CartWidget;