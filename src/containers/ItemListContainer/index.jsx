import React from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import CustomLoader from '../../components/CustomLoader';

const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [loading, productos, error] = useFirebase(categoryId);

  //retornamos los productos en itemList
  return (
      <>
        {loading ? <CustomLoader/> : <ItemList products={productos}/>}
        {error && <h2>{error}</h2>}
      </>
    );
  
};

export default ItemListContainer; 