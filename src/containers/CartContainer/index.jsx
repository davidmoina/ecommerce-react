import React, { useContext } from 'react';
import ItemCart from '../../components/ItemCart';
import { Shop } from '../../context/CartContext';
import styles from './styles.module.scss';

const CartContainer = () => {

  //primero traemos la informacion que tiene el carrito en el context
  const {cart, removeItem, clearCart} = useContext(Shop);

  const productsInCart = [];

  cart.forEach(item => {
    productsInCart.push(item);
  });

  console.log(productsInCart)


  return (
    <>
    <div className={styles.cartContainer}>
      <section className={styles.cartContent}>
        {cart.map(product => {
          return <ItemCart key={product.id} product={product}/>
        })}
      </section>
      <aside className={styles.cartTotals}>

      </aside>
    </div>
    </>

  )
}

export default CartContainer;