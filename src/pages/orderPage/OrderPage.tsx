import React from "react";
import Background from "../../containers/background/Background";
import Layout from "../../components/common-components/layout/Layout";
import './orderPage.css'
import StickerItem from "../../components/sticker-components/stickerItem/StickerItem";

const OrderPage = () => {
   return(
      <>
         <Background titleText="Shop" className="background background-order" titleTextClassname="title-wrapper title-wrapper-order"/>
         <Layout />
      </>
   )
}

export default OrderPage;