import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import styles from './styles.module.scss';
import { Shop } from '../../context/CartContext'

const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);

  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const toCart = (quantity) => {
    setQty(quantity);
    
  }

  const handleFinish = () => {
    const productToSave = {...product, quantity: qty};
    addItem(productToSave); 
    navigate("/cart");
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} width={400} alt="imagen de producto" />
      </div>
      <div className={styles.detailsContainer}>
        <h3>{product.title}</h3>
        <p>{product.description}.</p>
        <p>Precio: {product.price ? (product.price).toFixed(2) : 0}€</p>
        <div className={styles.countContainer}>
          {!qty 
          ? <ItemCount initial={1} stock={product.stock} onAdd={toCart}/> 
          : <button onClick={handleFinish}>Finalizar compra</button>}
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;