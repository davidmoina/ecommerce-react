import ItemCount from '../../ItemCount';
import styles from './styles.module.scss'
import React from 'react';

const ItemListContainer = ({greeting}) => {

  const agregarCarrito = (cantidad) => {
    console.log(cantidad);
    console.log(`Se agrego la cantidad ${cantidad} al carrito`);
  }

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemCount initial={1} stock={5} onAdd={agregarCarrito}/>
    </div>
    
  )
};

export default ItemListContainer; 