import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/CartContext';
import styles from './styles.module.scss';

const ItemCart = ({product}) => {

  const {removeItem} = useContext(Shop);

  return (
    <div className={styles.cartContent}>
      <img className={styles.productImage} width="130px" height="130px" src={product.image} alt=""/>
      <dl className={styles.title}>
        <dt>Nombre</dt>
        <dd>{product.title}</dd>
      </dl>
      <dl className={styles.price}>
        <dt>Subtotal</dt>
        <dd>{product.price * product.quantity}€</dd>
        
      </dl>
      <dl className={styles.quantity}>
        <dt>Cantidad</dt>
        <dd>{product.quantity}</dd>
      </dl>
      <button className={styles.button} onClick={()=> removeItem(product)}>X</button>
    </div>
  )
}

export default ItemCart;