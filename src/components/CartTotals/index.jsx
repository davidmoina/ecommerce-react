import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/CartContext';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const CartTotals = () => {

  const {totalPrice} = useContext(Shop);

  const totalP = totalPrice();

  return (
    <aside className={styles.cartTotals}>
      <p>Total: {totalP.toFixed(2)}€</p>
      {totalP > 0 && <Link to="/cart/order"><button className={styles.confirmButton}>Tramitar pedido</button></Link>}
    </aside>
  )
}

export default CartTotals