import React from "react";
import Background from "../../containers/background/Background";
import Layout from "../../components/common-components/layout/Layout";
import OrderBlock from "../../containers/order-block/OrderBlock";
import Form from "../../containers/form/Form";
import Footer from "../../containers/footer/Footer";
import './checkoutPage.css';

const CheckoutPage = () => {
   return(
      <>
         <Background titleText="Checkout" className="background background-checkout" titleTextClassname=""/>
         <Layout />
         <div className="container">
            <Form />
            <OrderBlock text="Your Order" />
         </div>
         <Footer />
      </>
   )
}

export default CheckoutPage;