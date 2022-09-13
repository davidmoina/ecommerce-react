import styles from './styles.module.scss'
import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  //llamamos los productos una vez cuando se renderiza la pagina y la guardamos en el useState
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  //usamos el useEffect para que se renderice una sola vez cuando se carge la pagina
  useEffect(() => {
  
    (async () => {
    
      //obtenemos productos desde la API de FakeStore de platzi
      try {
        if (categoryId) {
          const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
          const productos = await response.json();
          setProductos(productos);
        } else {
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);
        }
  
      } catch (error) {
        console.log(error);
      }
    })();

  }, [categoryId]);
  
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