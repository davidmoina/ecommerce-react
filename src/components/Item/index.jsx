import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

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
        <p className={styles.price}>{(product.price).toFixed(2)}€</p>
      </div>
  </div>
  )
}

export default Item