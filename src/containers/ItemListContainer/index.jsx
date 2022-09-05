import styles from './styles.module.scss'
import React from 'react';
import {products} from '../../data/products'
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
  
    (async () => {
  
      const obtenerProductos = new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 3000);
      });
    
      try {
        const response = await obtenerProductos;
        setProductos(response);
  
      } catch (error) {
        console.log(error);
      }
    })();

  }, [])
  
  console.log(productos)

  return (
    <div> 
      <h2>{greeting}</h2>
      <ItemList products={productos}/>
    </div>
    
  )
};

export default ItemListContainer; 