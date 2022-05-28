import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Background from "../../containers/background/Background";
import Footer from "../../containers/footer/Footer";
import StickerCart from "../../containers/StickersCart/StickersCart";
import './cartPage.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Layout from "../../components/common-components/layout/Layout";
import Button from "../../components/common-components/button/Button";
import OrderBlock from "../../containers/order-block/OrderBlock";

interface ICartPage {
   data: any
}


const CartPage = () => {
   const {id} = useParams();
   const [data, setData] = useState<ICartPage | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => updateState(data));

        const updateState = (data: ICartPage[keyof ICartPage]) => {
                setData({ data })
        }
    }, [id]);
   return (
      <div className="cart-page">
         <Background titleText="Cart" className="background background-cart" titleTextClassname=""/>
         <StickerCart data={data} />
         <OrderBlock text="Cart Totals" />
         <Link to={"/checkoutPage"}>
            <Button text="Proceed to checkout" className="button filled-background cart-block-button" />
         </Link>
         <Footer />
      </div>
   )
} 

export default CartPage;