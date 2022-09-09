import React from 'react';
import ItemCount from '../ItemCount';
import styles from './styles.module.scss'

const Item = ({product}) => {

  const agregarCarrito = (cantidad) => {
    console.log(cantidad);
    alert(`Se agrego la cantidad ${cantidad} al carrito`);
  };

  //por cada producto aqui devolvemos un Item
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.images} width="100%" alt="" />
      <div className={styles.cardBody}>
        <h5 className={styles.titleProduct}>{product.name}</h5>
        <p className={styles.price}>{product.price}€</p>
        <ItemCount initial={1} stock={product.stock} onAdd={agregarCarrito}/>
      </div>
  </div>
  )
}

export default Item