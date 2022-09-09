import styles from './styles.module.scss'
import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  //usamos el useEffect para que se renderice una sola vez cuando se carge la pagina
  useEffect(() => {
  
    (async () => {
  
      // const obtenerProductos = new Promise ((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(products);
      //   }, 3000);
      // });
    
      //obtenemos productos desde la API de FakeStore de platzi
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productos = await response.json();
        setProductos(productos);
  
      } catch (error) {
        console.log(error);
      }
    })();

  }, [])
  
  console.log(productos)

  //retornamos los productos en itemList
  return (
    <div> 
      <h2>{greeting}</h2>
      <ItemList products={productos}/>
    </div>
    
  )
};

export default ItemListContainer; 