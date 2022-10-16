import React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';

const ItemCount = ({stock, initial, onAdd}) => {

  const [add, setAdd] = useState(initial);

  const sumProduct = () => {
    if(add < stock) {
      setAdd(add + 1);
    } else {
      alert("No tenemos stock suficiente");
    }
  };

  const restProduct = () => {
    if(add > 1) {
      setAdd(add - 1);
    } else {
      alert("no puedes seleccionar menos de 1")
    }
  };

  const addCart = () => {
    onAdd(add);
    setAdd(initial);
  }

  return (
    <>
      <div className={styles.addButtons}>
        <button className={styles.buttons} onClick={sumProduct}>+</button>
        <p>{add}</p>
        <button className={styles.buttons} onClick={restProduct}>-</button>
      </div>
      <button className={styles.addCartButton} onClick={addCart}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;