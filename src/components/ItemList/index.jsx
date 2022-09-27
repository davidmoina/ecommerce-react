import React from 'react';
import Item from '../Item';
import styles from './styles.module.scss';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const ItemList = ({products}) => {
  return (
    <div className={styles.container}>
      {products.length 
      ? products.map(product => {
        return <Item key={product.id} product={product}/>
      })
      : <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}
    </div>
  )
}

export default ItemList;