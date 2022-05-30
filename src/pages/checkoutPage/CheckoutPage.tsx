import React from "react";
import OrderBlock from "../../containers/order-block/OrderBlock";
import Form from "../../containers/form/Form";
import Footer from "../../containers/footer/Footer";
import './checkoutPage.css';

const CheckoutPage = () => {
   return(
      <>
         <div className="checkout-page-wrapper">
            <Form />
            <OrderBlock text="Your Order" classNameTitle="title-thumbnail title-checkout" />
         </div>
         <Footer />
      </>
   );
};

export default CheckoutPage;