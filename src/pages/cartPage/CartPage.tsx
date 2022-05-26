import React, {useEffect, useState} from "react";
import Background from "../../containers/background/Background";
import Footer from "../../containers/footer/Footer";
import Cart from "../../containers/cart/Cart";
import './cartPage.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Layout from "../../components/common-components/layout/Layout";


const CartPage = () => {
   return (
      <div className="sticker-page">
         <Background titleText="Cart" className="background background-cart" titleTextClassname=""/>
         <Cart />
         <Footer />
      </div>
   )
} 

export default CartPage;