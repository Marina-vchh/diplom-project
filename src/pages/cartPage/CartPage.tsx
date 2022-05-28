import React, {useEffect, useState} from "react";
import Background from "../../containers/background/Background";
import Footer from "../../containers/footer/Footer";
import StickerCart from "../../containers/stickersCart/StickersCart";
import './cartPage.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Layout from "../../components/common-components/layout/Layout";
import Button from "../../components/common-components/button/Button";
import OrderBlock from "../../containers/order-block/OrderBlock";


const CartPage = () => {
   return (
      <div className="cart-page">
         <Background titleText="Cart" className="background background-cart" titleTextClassname=""/>
         <StickerCart />
         <OrderBlock text="Cart Totals" />
         <Link to={"/checkoutPage"}>
            <Button text="Proceed to checkout" className="button filled-background cart-block-button" />
         </Link>
         <Footer />
      </div>
   )
} 

export default CartPage;