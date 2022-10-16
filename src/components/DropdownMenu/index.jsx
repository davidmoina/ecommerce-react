import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <Button 
        className={styles.button}
        sx={{
          fontWeight: 500,
          fontSize: 20,
          color: 'inherit',
          textDecoration: 'none',
          fontFamily: 'inherit',
          letterSpacing: '0.01rem'
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorías
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{
          fontWeight: 500,
          fontSize: 20,
          fontFamily: 'inherit'
        }} 
        onClick={handleClose}><Link to="/category/men's clothing">Ropa Hombre</Link></MenuItem>
        <MenuItem sx={{
          fontWeight: 500,
          fontSize: 20,
          fontFamily: 'inherit',
        }}  
        onClick={handleClose}><Link to="/category/women's clothing">Ropa Mujer</Link></MenuItem>
        <MenuItem sx={{
          fontWeight: 500,
          fontSize: 20,
          fontFamily: 'inherit',
        }}  
        onClick={handleClose}><Link to="/category/electronics">Electronica</Link></MenuItem>
        <MenuItem sx={{
          fontWeight: 500,
          fontSize: 20,
          fontFamily: 'inherit',
        }}  
        onClick={handleClose}><Link to="/category/jewelery">Joyeria</Link></MenuItem>
      </Menu>
    </div>
  );
}
