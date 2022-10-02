import React from "react";
import { useState } from "react";
import { createContext } from "react";

//para crear el context, primero lo declaramos
export const Shop = createContext([]);

//paso 2, creamos el provider (proveedor) que me va a envolver la aplicacion
const CartContext = ({children}) => {

  const [cart, setCart] = useState([]);

  //funcion para agregar los items al array del carrito
  const addItem = (item) => {
    const repeatProducts = isInCart(item.id);
    
    if(repeatProducts) {
      const modifiedCart = cart.map(product => {
        if (product.id === item.id) {
          product.quantity += item.quantity;
          return product;
        } 
        return product;
      });
      setCart(modifiedCart)

    } else {
      const cartModified = [...cart, item];
      setCart(cartModified);   
    };
  };

  const isInCart = (id) => {
    return cart.some(product => product.id === id)
  };

  //eliminar elementos del carrito
  const removeItem = (itemRemove) => {
    const removedCart = cart.filter(product => product !== itemRemove);
    setCart(removedCart); 
  }

  //vaciar el carrito
  const clearCart = () => {
      setCart([]);
  }

  //funcion para sumar el precio total en el carrito
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  } 

  //funcion para obtnener el total de items en el carrito
  const totalProducts = () => {
    return cart.reduce((prev, act) => prev + act.quantity, 0);
  }


  return (
    <Shop.Provider value={{cart, addItem, removeItem, clearCart, totalPrice, totalProducts}}>
      {children}
    </Shop.Provider>
  );
};

export default CartContext;