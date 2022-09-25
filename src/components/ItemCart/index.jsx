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
        <dt>{product.title}</dt>
      </dl>
      <dl className={styles.price}>
        <dt>{product.price}€</dt>
      </dl>
      <dl className={styles.quantity}>
        <dt>{product.quantity}</dt>
      </dl>
    </div>
  )
}

export default ItemCart;