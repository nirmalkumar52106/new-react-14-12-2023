import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { CartProvider } from 'react-use-cart'
import { Cart } from "./Cart/Cart";
import { About } from "./Screens/About";
import { Home } from "./Screens/Home";
import { LoginPage } from "./Screens/Login/Login";
import { Checkout } from "./Screens/Checkout";
import { Signup } from "./Screens/Login/Signup";
import { ProductDetail } from "./Homecomponents/Products/ProductDetailpage";
import { Customer } from "./Screens/Login/Customer";
import { Error } from "./Screens/Error";
import { Itemdetail } from "./Homecomponents/Products/Itmetetail";
import { Payment } from "./Screens/payment";


function App(){ 
  return (
    <>
    <CartProvider id="root">
      <Routes>
        <Route excat path="/" element={<LoginPage/>}/>
        <Route excat path="/home" element={<Home/>}/>
        <Route excat path="/about" element={<About/>}/>
        <Route excat path="/cart" element={<Cart/>}/>
        <Route excat path="/checkout" element={<Checkout/>}/>
        <Route excat path="/payment" element={<Payment/>}/>
        <Route excat path="/signup" element={<Signup/>}/>
        <Route excat path="/productss/:productId" element={<ProductDetail/>}/>
        <Route excat path="/customer" element={<Customer/>}/>
        <Route excat path="*" element={<Error/>}/>
      </Routes>
    </CartProvider>

    </>
  );
}

export default App;
