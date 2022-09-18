import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import styles from './styles.module.scss';

const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);

  const navigate = useNavigate();

  const toCart = (quantity) => {
    setQty(quantity)
  }

  const handleFinish = () => {
    navigate("/cart")
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} width={400} alt="imagen de producto" />
      </div>
      <div className={styles.detailsContainer}>
        <h3>{product.title}</h3>
        <p>{product.description}.</p>
        <p>Precio: {product.price}€</p>
        <div className={styles.countContainer}>
          {!qty ? <ItemCount initial={1} stock={10} onAdd={toCart}/> : <button onClick={handleFinish}>Finalizar compra</button>}
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;