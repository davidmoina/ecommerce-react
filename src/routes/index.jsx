import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from '../components/Form';
import NavBar from "../components/NavBar";
import NotFound from "../components/NotFound";
import Cart from "../containers/CartContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";

const Routing = () => {
  return (
    <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart/order" element={<Form/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default Routing;