import React from "react";
import Background from "../../containers/background/Background";
import Layout from "../../components/common-components/layout/Layout";
import Form from "../../containers/form/Form";
import Footer from "../../containers/footer/Footer";
import './checkout.css';

const CheckoutPage = () => {
   return(
      <>
         <Background titleText="Checkout" className="background background-checkout" titleTextClassname=""/>
         <Layout />
         <Form />
         <Footer />
      </>
   )
}

export default CheckoutPage;