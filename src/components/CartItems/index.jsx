import styles from './styles.module.scss';
import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import ButtonsCartItems from '../ButtonsCartItems';

const CartItems = () => {

  const {cart} = useContext(Shop);

  const productsInCart = [];

  cart.forEach(item => {
    productsInCart.push(item);
  });

  return (
    <section className={styles.cartContent}>
        {
          !cart.length 
          ? <div className={styles.emptyContainer}>
              <p>No hay productos en el carrito</p>
              <Link to="/"><button>Volver al catalogo</button></Link>
            </div>
          
          : cart.map(product => {
              return <ItemCart key={product.id} product={product}/>
            })
        }
        {cart.length > 0 && <ButtonsCartItems/>}
      </section>
  )
}

export default CartItems;