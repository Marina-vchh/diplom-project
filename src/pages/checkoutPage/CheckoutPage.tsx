import React from "react";
import Background from "../../containers/background/Background";
import OrderBlock from "../../containers/order-block/OrderBlock";
import Form from "../../containers/form/Form";
import Footer from "../../containers/footer/Footer";
import './checkoutPage.css';

const CheckoutPage = () => {
   return(
      <>
         <div className="container">
            <Form />
            <OrderBlock text="Your Order" />
         </div>
         <Footer />
      </>
   )
}

export default CheckoutPage;