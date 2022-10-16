import React from 'react';
import Item from '../Item';
import styles from './styles.module.scss';


const ItemList = ({products}) => {
  return (
    <div className={styles.container}>
      {products.map(product => {
        return <Item key={product.id} product={product}/>
      })}
    </div>
  )
}

export default ItemList;