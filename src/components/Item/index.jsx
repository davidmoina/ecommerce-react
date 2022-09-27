import React from 'react';
import ItemCount from '../ItemCount';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

  const agregarCarrito = (cantidad) => {
    alert(`Se agrego la cantidad ${cantidad} al carrito`);
  };

  //creamos una variable para usar el hook useNavigate
  const navigate = useNavigate();

  //navegamos creando una variable usando un hook
  //hacia el detalle del producto seleccionado
  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  //por cada producto aqui devolvemos un Item
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} onClick={handleNavigate} width="100%" alt="" />
      <div className={styles.cardBody}>
        <h6 className={styles.titleProduct}>{product.title}</h6>
        <p className={styles.price}>{product.price}€</p>
        <ItemCount initial={1} stock={product.stock} onAdd={agregarCarrito}/>
      </div>
  </div>
  )
}

export default Item