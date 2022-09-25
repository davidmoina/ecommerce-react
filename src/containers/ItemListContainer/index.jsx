import styles from './styles.module.scss'
import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase/config';

import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

  //llamamos los productos una vez cuando se renderiza la pagina y la guardamos en el useState
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  //usamos el useEffect para que se renderice una sola vez cuando se carge la pagina
  useEffect(() => {
  
    (async () => {
    
      //obtenemos productos Firestore
      try {

        const q = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const productosFirebase = [];

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          productosFirebase.push({id: doc.id, ...doc.data()})
        });

        setProductos(productosFirebase);
  
      } catch (error) {
        console.log(error);
      }
    })();

  }, [categoryId]);
  
  console.log(productos)

  //retornamos los productos en itemList
  return (
    <div>
      <ItemList products={productos}/>
    </div>
    
  )
};

export default ItemListContainer; 