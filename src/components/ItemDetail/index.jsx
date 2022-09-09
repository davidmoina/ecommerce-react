import React from 'react';
import ItemCount from '../ItemCount';
import styles from './styles.module.scss';

const ItemDetail = ({product}) => {

  const agregarCarrito = (cantidad) => {
    console.log(cantidad);
    alert(`Se agrego la cantidad ${cantidad} al carrito`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} width={400} alt="" />
      </div>
      <div className={styles.detailsContainer}>
        <h3>{product.title}</h3>
        <p>{product.description}.</p>
        <p>Precio: {product.price}$</p>
        <div className={styles.countContainer}>
          <ItemCount initial={1} stock={10} onAdd={agregarCarrito}/>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;